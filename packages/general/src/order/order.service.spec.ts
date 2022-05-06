import { OrderService } from './order.service';
import { OrderDto, OrderEntity } from './entity';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    service = new OrderService();
  });

  it('findAll', () => {
    service.findAll().subscribe((data) => {
      expect(data.length).toEqual(3);
    });
  });

  it('findbById', () => {
    service.findById(2).subscribe((data) => {
      expect(data).toEqual({
        id: 2,
        name: 'b',
        description: 'b',
      });
    });
  });

  it('create', () => {
    const dto: OrderDto = {
      name: 'd',
      description: 'd',
    };

    const order: OrderEntity = {
      ...dto,
      id: 4,
    };

    service.create(dto).subscribe((data) => {
      expect(data).toEqual(order);
    });

    service.findAll().subscribe((data) => {
      expect(data.length).toEqual(4);
    });
  });
});
