package com.saturn72.keycloak;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Saturn72EventListenerProviderTest {
    static class DummyOutbox implements Outbox {
        public void send(org.keycloak.events.Event event) {
        }
    }

    @Test
    void testProviderInstantiation() {
        Saturn72EventListenerProvider provider = new Saturn72EventListenerProvider(new DummyOutbox());
        assertNotNull(provider);
    }
}
