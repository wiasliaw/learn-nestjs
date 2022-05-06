import { Test } from '@nestjs/testing';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = testModule.get<OrderController>(OrderController);
    service = testModule.get<OrderService>(OrderService);
  });

  it('findAll()', async () => {
    const suite = jest.spyOn(service, 'findAll');
    controller.findAll();
    expect(suite).toHaveBeenCalled();
  });

  it('', async () => {
    const suite = jest.spyOn(service, 'findById');
    controller.findById('3');
    expect(suite).toHaveBeenCalled();
  });

  it('create()', async () => {
    const suite = jest.spyOn(service, 'create');
    controller.create({ name: 'hello', description: 'world' });
    expect(suite).toHaveBeenCalled();
  });
});
