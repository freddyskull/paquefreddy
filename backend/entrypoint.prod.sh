#!/bin/sh
set -e

# Wait for DB
echo "[entrypoint.prod] Waiting for database..."
until pg_isready -d "$DATABASE_URL" >/dev/null 2>&1; do
  echo "[entrypoint.prod] DB not ready, retrying in 2s..."
  sleep 2
done

# Prisma client (safety)
echo "[entrypoint.prod] Generating Prisma client (safety)..."
npx prisma generate || true

# Ensure database exists
DB_NAME=$(echo "$DATABASE_URL" | sed -E 's|.*/([^/?]+).*|\1|')
DB_BASE=$(echo "$DATABASE_URL" | sed -E 's|(postgres(ql)?://[^/]+).*|\1|')
ADMIN_URL="${DB_BASE}/postgres"
if ! psql "$ADMIN_URL" -tc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
  echo "[entrypoint.prod] Creating database '${DB_NAME}'..."
  psql "$ADMIN_URL" -c "CREATE DATABASE \"${DB_NAME}\"" || true
else
  echo "[entrypoint.prod] Database '${DB_NAME}' exists."
fi

# Migrations
echo "[entrypoint.prod] Running Prisma migrate deploy..."
npx prisma migrate deploy

# Optional seed
if [ "${RUN_SEED}" = "true" ]; then
  echo "[entrypoint.prod] RUN_SEED=true => running seed..."
  if npx prisma --help | grep -q "db seed"; then
    npx prisma db seed || ts-node prisma/seed.ts || true
  else
    ts-node prisma/seed.ts || true
  fi
fi

# Build if missing
if [ ! -d "./dist" ] || [ -z "$(ls -A ./dist 2>/dev/null)" ]; then
  echo "[entrypoint.prod] dist/ missing => npm run build"
  npm run build
fi

# Start prod
echo "[entrypoint.prod] Starting Nest (prod)..."
exec npm run start:prod
