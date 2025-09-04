import { Injectable } from '@nestjs/common';
import { CreateCheckoutInput } from './dto/create-checkout.input';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CheckoutService {
  constructor(private readonly productsService: ProductsService) {}

  checkout(checkoutProduct: CreateCheckoutInput) {
    const ids = checkoutProduct.products.reduce((accum, cur) => [...accum, cur.id], [])
    return this.productsService.findByIds(ids)
  }
}
