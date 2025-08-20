package com.saturn72.keycloak;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RabbitMqSettingsTest {
    @Test
    void testConstructorAndFields() {
        RabbitMqSettings settings = new RabbitMqSettings("exchange", "routingKey", "host", "user", "pass");
        assertEquals("exchange", settings.exchange);
        assertEquals("routingKey", settings.routingKey);
        assertEquals("host", settings.host);
        assertEquals("user", settings.user);
        assertEquals("pass", settings.pass);
    }
}
