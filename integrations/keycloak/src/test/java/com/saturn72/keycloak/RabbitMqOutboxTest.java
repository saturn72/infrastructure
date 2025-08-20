package com.saturn72.keycloak;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RabbitMqOutboxTest {
    @Test
    void testConstructor() {
        RabbitMqSettings settings = new RabbitMqSettings("exchange", "routingKey", "host", "user", "pass");
        RabbitMqOutbox outbox = new RabbitMqOutbox(settings);
        assertNotNull(outbox);
    }
}
