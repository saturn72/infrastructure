package com.saturn72.keycloak;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Saturn72EventListenerProviderFactoryTest {
    @Test
    void testFactoryInstantiation() {
        Saturn72EventListenerProviderFactory factory = new Saturn72EventListenerProviderFactory();
        assertNotNull(factory);
    }
}
