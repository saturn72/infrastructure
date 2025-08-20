import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqConsumer } from './rabbitmq.consumer';
import { UserActivityController } from './user-activity.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, UserActivityController],
  providers: [AppService, RabbitMqConsumer],
})
export class AppModule {}
