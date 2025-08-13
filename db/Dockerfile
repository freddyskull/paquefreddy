FROM postgres:16-alpine

# Optional: set default envs at build-time (can be overridden at runtime)
ENV POSTGRES_USER=postgres \
    POSTGRES_PASSWORD=postgres \
    POSTGRES_DB=paquefreddy

# Copy initialization scripts into the image
# Any .sql or .sh file in this folder runs automatically on first container start
COPY init/ /docker-entrypoint-initdb.d/

# Expose default Postgres port
EXPOSE 5432
