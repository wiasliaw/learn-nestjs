import { EventEmitter2 } from '@nestjs/event-emitter';

import { OrderService } from './order.service';
import { OrderDto, OrderEntity } from './entity';

describe('OrderService', () => {
  let suite: jest.SpyInstance;
  let emitter: EventEmitter2;
  let service: OrderService;

  beforeEach(async () => {
    emitter = new EventEmitter2({
      wildcard: true,
    });
    suite = jest.spyOn(emitter, 'emit');
    service = new OrderService(emitter);
  });

  /**
   * test the behavior of server
   * side effect
   *   - service._data
   *   - event emit
   */
  it('create', () => {
    const dto = {
      name: 'hello',
      description: 'world',
    } as OrderDto;

    const order = {
      id: 1,
      ...dto,
    } as OrderEntity;

    // behave
    service.create(dto);

    // expect
    expect(service.findAll()).toEqual([order]);
    expect(suite).toHaveBeenCalledWith('LOG.CREATE', order);
  });
});
