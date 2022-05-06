import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      global: true,
      wildcard: true,
      newListener: true,
      removeListener: true,
      verboseMemoryLeak: true,
    }),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class AppModule {}
