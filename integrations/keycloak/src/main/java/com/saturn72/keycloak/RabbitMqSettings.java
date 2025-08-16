package com.saturn72.keycloak;

public class RabbitMqSettings {
    public final String exchange;
    public final String routingKey;
    public final String host;
    public final String user;
    public final String pass;

    public RabbitMqSettings(String exchange, String routingKey, String host, String user, String pass) {
        this.exchange = exchange;
        this.routingKey = routingKey;
        this.host = host;
        this.user = user;
        this.pass = pass;
    }

    public static RabbitMqSettings fromEnv() {
        String exchange = System.getenv("RABBITMQ_EXCHANGE");
        if (exchange == null || exchange.isEmpty()) {
            exchange = "from_keycloak";
        }
        String routingKey = System.getenv("RABBITMQ_ROUTING_KEY");
        if (routingKey == null) {
            routingKey = "";
        }
        String host = System.getenv("RABBITMQ_HOST");
        String user = System.getenv("RABBITMQ_USER");
        String pass = System.getenv("RABBITMQ_PASS");
        if (host == null || host.isEmpty()) {
            System.err.println("RABBITMQ_HOST environment variable is required");
            throw new IllegalArgumentException("RABBITMQ_HOST environment variable is required");
        }
        if (user == null || user.isEmpty()) {
            System.err.println("RABBITMQ_USER environment variable is required");
            throw new IllegalArgumentException("RABBITMQ_USER environment variable is required");
        }
        if (pass == null || pass.isEmpty()) {
            System.err.println("RABBITMQ_PASS environment variable is required");
            throw new IllegalArgumentException("RABBITMQ_PASS environment variable is required");
        }
        return new RabbitMqSettings(exchange, routingKey, host, user, pass);
    }
}
