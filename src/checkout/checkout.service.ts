import { Injectable } from '@nestjs/common';
import { CreateCheckoutInput } from './dto/create-checkout.input';
import { ProductsService } from 'src/products/products.service';
import { InitiateCheckout } from 'src/graphql';
import { ConfigService } from '@nestjs/config';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class CheckoutService {

  constructor(private readonly productsService: ProductsService, private readonly stripeService: StripeService, private readonly configService: ConfigService) {
  }

  async checkout(checkoutProduct: CreateCheckoutInput): Promise<InitiateCheckout> {

    const ids = checkoutProduct.products.map(product => product.id)

    const products = await this.productsService.findByIds(ids)
    const clientUrl = this.configService.get<string>('CLIENT_URL')!

    const session = await this.stripeService.createCheckoutSession(products, `${clientUrl}/receipt?session_id={CHECKOUT_SESSION_ID}`, `${clientUrl}/cart`)

    return {
      paymentMethod: 'stripe',
      paymentKey: session.id
    }
  }

}
