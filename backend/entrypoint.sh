#!/bin/sh
set -e

echo "[entrypoint] Waiting for database to be ready..."
until pg_isready -d "$DATABASE_URL" >/dev/null 2>&1; do
  echo "[entrypoint] Database not ready yet, retrying in 2s..."
  sleep 2
done

echo "[entrypoint] Database is ready. Running Prisma generate..."
npx prisma generate

echo "[entrypoint] Ensuring target database exists..."
# Extract DB name and base URL from DATABASE_URL
DB_NAME=$(echo "$DATABASE_URL" | sed -E 's|.*/([^/?]+).*|\1|')
DB_BASE=$(echo "$DATABASE_URL" | sed -E 's|(postgres(ql)?://[^/]+).*|\1|')
ADMIN_URL="${DB_BASE}/postgres"

# Create DB if missing
if ! psql "$ADMIN_URL" -tc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
  echo "[entrypoint] Creating database '${DB_NAME}'..."
  psql "$ADMIN_URL" -c "CREATE DATABASE \"${DB_NAME}\"" || true
else
  echo "[entrypoint] Database '${DB_NAME}' already exists."
fi

echo "[entrypoint] Running Prisma migrate deploy..."
npx prisma migrate deploy

if [ "${RUN_SEED}" = "true" ]; then
  echo "[entrypoint] RUN_SEED=true => running seed script..."
  # Prefer Prisma seeding if configured; fallback to direct ts-node
  if npx prisma --help | grep -q "db seed"; then
    npx prisma db seed || ts-node prisma/seed.ts || true
  else
    ts-node prisma/seed.ts || true
  fi
fi

echo "[entrypoint] Starting application..."
if [ "$#" -gt 0 ]; then
  echo "[entrypoint] Executing passed command: $@"
  exec "$@"
else
  exec npm run start:dev
fi
