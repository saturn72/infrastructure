import { Controller, Get } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Controller('user-activity')
export class UserActivityController {
  private mongoUri: string;

  constructor(private readonly configService: ConfigService) {
    this.mongoUri =
      this.configService.get('MONGODB_URI') ||
      (() => {
        throw new Error('MONGODB_URI is not defined');
      })();
  }

  @Get()
  async getAll() {
    const mongoClient = new MongoClient(this.mongoUri);
    await mongoClient.connect();
    const db = mongoClient.db();
    const collection = db.collection('user_activity');
    const entries = await collection.find({}).toArray();
    await mongoClient.close();
    return entries;
  }
}
