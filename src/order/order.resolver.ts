import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation('fetchOrder')
  checkout(@Args('paymentMethod') paymentMethod: string, @Args('paymentKey') paymentKey: string) {
    return this.orderService.getOrder(paymentMethod, paymentKey)
  }
}
