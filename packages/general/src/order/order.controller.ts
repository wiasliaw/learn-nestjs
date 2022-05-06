import { Controller, Post, Body, HttpCode, Get, Param } from '@nestjs/common';

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

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(parseInt(id));
  }

  @Post()
  @HttpCode(204)
  create(@Body() dto: OrderDto): Observable<OrderEntity> {
    return this.service.create(dto);
  }
}
