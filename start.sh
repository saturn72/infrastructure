#!/usr/bin/env bash
set -e

# Build and verify the Java Keycloak provider
cd ./integrations/keycloak
mvn clean verify
cd -

# Only start docker-compose if build succeeds
exec docker-compose up --build
