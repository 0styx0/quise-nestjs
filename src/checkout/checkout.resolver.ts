import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutInputDto } from './dto/create-checkout.input';

@Resolver('Checkout')
export class CheckoutResolver {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Mutation('checkout')
  checkout(@Args('checkoutProducts') checkoutInput: CreateCheckoutInputDto) {
    return this.checkoutService.checkout(checkoutInput);
  }
}
