package com.saturn72.keycloak;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;

public class Saturn72EventListenerProvider implements EventListenerProvider {
    private final Outbox outbox;

    public Saturn72EventListenerProvider(Outbox outbox) {
        this.outbox = outbox;
    }

    @Override
    public void onEvent(Event event) {
        System.out.println("Keycloak Event: " + event.getType() + " User: " + event.getUserId());
        EventType eventType = event.getType();
        if (eventType == EventType.REGISTER ||
                eventType == EventType.LOGIN ||
                eventType == EventType.LOGOUT ||
                eventType == EventType.DELETE_ACCOUNT ||
                eventType == EventType.IMPERSONATE ||
                eventType == EventType.VERIFY_EMAIL ||
                eventType == EventType.VERIFY_PROFILE) {
            outbox.send(event);
        }
    }

    @Override
    public void onEvent(org.keycloak.events.admin.AdminEvent adminEvent, boolean includeRepresentation) {
        // No-op for admin events
    }

    @Override
    public void close() {
        // Cleanup if needed
    }
}
