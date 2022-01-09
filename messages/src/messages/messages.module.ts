import { Module } from '@nestjs/common';
import { MessagesRepository } from 'src/repositories/messages.repository';
import { MessagesService } from 'src/services/messages.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}

// Providers = Things that can be used as a dependencu for other classes