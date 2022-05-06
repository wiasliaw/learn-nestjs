import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventService {
  constructor(private readonly ee2: EventEmitter2) {}

  public trigger() {
    this.ee2.emit('Trigger', {
      name: 'AAA',
      id: 3333,
    });
  }

  @OnEvent('Trigger')
  private handle(payload: any) {
    console.log(payload);
  }
}
