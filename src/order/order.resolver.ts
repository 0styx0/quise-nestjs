import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query('fetchOrder')
  fetchOrder(@Args('paymentKey') paymentKey: string) {
    return this.orderService.getOrder(paymentKey)
  }
}
