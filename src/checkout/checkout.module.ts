import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutResolver } from './checkout.resolver';
import { ProductsModule } from 'src/products/products.module';

@Module({
  providers: [CheckoutResolver, CheckoutService],
  imports: [ProductsModule]
})
export class CheckoutModule {}
