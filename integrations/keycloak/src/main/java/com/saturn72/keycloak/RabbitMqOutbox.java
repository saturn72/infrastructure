package com.saturn72.keycloak;

import org.keycloak.events.Event;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;

public class RabbitMqOutbox implements Outbox {
    private final RabbitMqSettings settings;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public RabbitMqOutbox(RabbitMqSettings settings) {
        this.settings = settings;
    }

    @Override
    public void send(Event event) {
        try {
            String json = objectMapper.writeValueAsString(event);
            System.out.println("Outbox event JSON: " + json);

            ConnectionFactory factory = new ConnectionFactory();
            factory.setHost(settings.host);
            factory.setUsername(settings.user);
            factory.setPassword(settings.pass);

            try (Connection connection = factory.newConnection();
                    Channel channel = connection.createChannel()) {
                channel.basicPublish(settings.exchange, settings.routingKey, null, json.getBytes("UTF-8"));
                System.out.println("Outbox sent event to RabbitMQ: " + json);
            }
        } catch (Exception e) {
            System.err.println("Outbox failed to send event to RabbitMQ: " + e.getMessage());
        }
    }
}
