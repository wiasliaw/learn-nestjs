import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { OrderModule } from './order';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      newListener: true,
      removeListener: true,
      global: true,
    }),
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
