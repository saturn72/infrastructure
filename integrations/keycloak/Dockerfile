# Stage 1: Build the provider JAR with Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /build
COPY . /build
RUN mvn clean verify

# Stage 2: Build the Keycloak image with the provider
FROM quay.io/keycloak/keycloak:24.0.4
USER root
COPY --from=builder /build/target/saturn72-keycloak-event-listener-1.0.0-all.jar /opt/keycloak/providers/
USER 1000
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
