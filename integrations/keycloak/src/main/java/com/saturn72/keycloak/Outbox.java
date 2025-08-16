package com.saturn72.keycloak;

import org.keycloak.events.Event;

public interface Outbox {
    void send(Event event);
}
