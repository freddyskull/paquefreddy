-- Runs automatically on first container start via docker-entrypoint-initdb.d
-- Create extensions or seed minimal data here if needed

-- Example: UUID extension (safe if exists)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- You can add seed data below if required
-- INSERT INTO ...;
