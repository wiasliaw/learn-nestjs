import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';

import { OrderService } from './order.service';
import { OrderDto, OrderEntity } from './entity';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {}

  @Get()
  findAll(): OrderEntity[] {
    return this.service.findAll();
  }

  @Post()
  @HttpCode(204)
  create(@Body() dto: OrderDto) {
    this.service.create(dto);
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
