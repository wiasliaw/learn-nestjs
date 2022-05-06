import { Injectable, Scope } from '@nestjs/common';
import { Observable, of, tap, map, from, filter } from 'rxjs';

import { OrderDto, OrderEntity } from './entity';

@Injectable({ scope: Scope.DEFAULT })
export class OrderService {
  private _data: OrderEntity[];

  constructor() {
    this._data = [
      {
        id: 1,
        name: 'a',
        description: 'a',
      },
      {
        id: 2,
        name: 'b',
        description: 'b',
      },
      {
        id: 3,
        name: 'c',
        description: 'c',
      },
    ];
  }

  findAll(): Observable<OrderEntity[]> {
    return of(this._data);
  }

  findById(id: number): Observable<OrderEntity> {
    return from(this._data).pipe(filter((e) => e.id === id));
  }

  create(dto: OrderDto): Observable<OrderEntity> {
    return of(dto).pipe(
      map((dto) => ({ ...dto, id: this._data.length + 1 })),
      tap((e) => this._data.push(e)),
    );
  }
}
