package com.saturn72.keycloak;

import org.keycloak.Config.Scope;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventListenerProviderFactory;
import org.keycloak.models.KeycloakSession;

public class Saturn72EventListenerProviderFactory implements EventListenerProviderFactory {
    private Outbox outbox;

    @Override
    public EventListenerProvider create(KeycloakSession session) {
    return new Saturn72EventListenerProvider(outbox);
    }

    @Override
    public void postInit(org.keycloak.models.KeycloakSessionFactory factory) {
    }

    @Override
    public void close() {
    }

    @Override
    public String getId() {
    return "saturn72-listener";
    }

    @Override
    public void init(Scope config) {
        RabbitMqSettings settings = RabbitMqSettings.fromEnv();
        this.outbox = new RabbitMqOutbox(settings);
    }
}
