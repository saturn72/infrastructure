import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect, Channel, Connection } from 'amqplib';
import { MongoClient } from 'mongodb';

@Injectable()
export class RabbitMqConsumer implements OnModuleInit {
  private channel: Channel;
  private connection: Connection;
  private mongoClient: MongoClient;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const rabbitUrl = `amqp://${this.configService.get('RABBITMQ_USER')}:${this.configService.get('RABBITMQ_PASS')}@${this.configService.get('RABBITMQ_HOST')}`;
    const exchange = this.configService.get('RABBITMQ_EXCHANGE');
    const routingKey = this.configService.get('RABBITMQ_ROUTING_KEY');
    const mongoUri = this.configService.get('MONGODB_URI');

    this.connection = await connect(rabbitUrl);
    this.channel = await this.connection.createChannel();
    await this.channel.assertExchange(exchange, 'direct', { durable: true });
    const q = await this.channel.assertQueue('', { exclusive: true });
    await this.channel.bindQueue(q.queue, exchange, routingKey);

    this.mongoClient = new MongoClient(mongoUri);
    await this.mongoClient.connect();
    const db = this.mongoClient.db();
    const collection = db.collection('user_activity');

    this.channel.consume(q.queue, async (msg) => {
      if (msg) {
        const content = msg.content.toString();
        await collection.insertOne({
          message: content,
          receivedAt: new Date(),
        });
        this.channel.ack(msg);
      }
    });
    console.log(
      `RabbitMQ consumer started for exchange '${exchange}' and routing key '${routingKey}'`,
    );
  }
}
