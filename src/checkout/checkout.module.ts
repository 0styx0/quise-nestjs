import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutResolver } from './checkout.resolver';
import { ProductsModule } from 'src/products/products.module';
import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  providers: [CheckoutResolver, CheckoutService],
  imports: [ProductsModule, StripeModule]
})
export class CheckoutModule {}
