import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller()
export class EventController {
  constructor(private readonly service: EventService) {}

  @Get()
  trigger(): string {
    this.service.trigger();
    return '';
  }
}
