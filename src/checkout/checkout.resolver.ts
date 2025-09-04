import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutInput } from './dto/create-checkout.input';

@Resolver('Checkout')
export class CheckoutResolver {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Mutation('checkout')
  checkout(@Args('checkoutProducts') checkoutInput: CreateCheckoutInput) {
    return this.checkoutService.checkout(checkoutInput);
  }
}
