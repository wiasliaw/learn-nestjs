import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';

import { OrderService } from './order.service';
import { OrderDto, OrderEntity } from './entity';
import { Observable } from 'rxjs';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {}

  @Get()
  findAll(): Observable<OrderEntity[]> {
    return this.service.findAll();
  }

  @Post()
  @HttpCode(204)
  create(@Body() dto: OrderDto): Observable<OrderEntity> {
    return this.service.create(dto);
  }

  // @Patch()
  // update() {
  //   this.service.update();
  // }

  // @Delete()
  // delete() {
  //   this.service.delete();
  // }
}
