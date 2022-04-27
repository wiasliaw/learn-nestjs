import { Injectable, Scope } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { OrderDto, OrderEntity } from './entity';

@Injectable({ scope: Scope.DEFAULT })
export class OrderService {
  private _data: OrderEntity[];

  constructor(private eventEmitter: EventEmitter2) {
    this._data = new Array<OrderEntity>();
  }

  findAll(): Array<OrderEntity> {
    return this._data;
  }

  create(dto: OrderDto) {
    const order: OrderEntity = {
      id: this._data.length + 1,
      ...dto,
    };
    this._data.push(order);
    this.eventEmitter.emit('LOG.CREATE', order);
  }

  // updateById() {
  //   this.eventEmitter.emit('LOG.UPDATE');
  // }

  // deleteById() {
  //   this.eventEmitter.emit('LOG.DELETE');
  // }
}
