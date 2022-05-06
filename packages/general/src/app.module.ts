import { Module } from '@nestjs/common';

import { OrderModule } from './order';

@Module({
  imports: [OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
