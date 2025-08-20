import { Controller, Get } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Controller('user-activity')
export class UserActivityController {
  private mongoClient: MongoClient;
  private dbName: string;

  constructor(private readonly configService: ConfigService) {
    const mongoUri = this.configService.get('MONGODB_URI');
    this.mongoClient = new MongoClient(mongoUri);
    // Extract db name from URI or use default
    this.dbName =
      mongoUri?.split('/').pop()?.split('?')[0] || 'user-activity-log';
  }

  @Get()
  async getAll() {
    await this.mongoClient.connect();
    const db = this.mongoClient.db(this.dbName);
    const collection = db.collection('user_activity');
    const entries = await collection.find({}).toArray();
    await this.mongoClient.close();
    return entries;
  }
}
