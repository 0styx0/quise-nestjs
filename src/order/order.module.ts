import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  providers: [OrderResolver, OrderService],
  imports: [StripeModule]
})
export class OrderModule {}
