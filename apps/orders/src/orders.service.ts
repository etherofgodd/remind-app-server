import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dtos/create-order.dto';
import { OrderRespository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepo: OrderRespository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.orderRepo.create(request);
  }

  async getOrders() {
    return this.orderRepo.find({});
  }
}
