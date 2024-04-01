#! /bin/bash

set -euo pipefail

function create_postgres_database_and_user() {
    echo "Creating database '$DB_NAME' and user '$DB_USER'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
        CREATE USER $DB_USER WITH LOGIN PASSWORD "$DB_PASSWORD;
        CREATE DATABASE $DB_NAME;
        GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOSQL
}

create_postgres_database_and_user
