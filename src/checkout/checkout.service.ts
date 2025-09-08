import { Injectable } from '@nestjs/common';
import { CreateCheckoutInput } from './dto/create-checkout.input';
import { ProductsService } from 'src/products/products.service';
import { InitiateCheckout, Product } from 'src/graphql';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CheckoutService {

  private stripe: Stripe;
  private clientUrl: string;

  constructor(private readonly productsService: ProductsService, configService: ConfigService) {
    this.stripe = new Stripe(configService.get<string>('STRIPE_KEY')!);
    this.clientUrl = configService.get<string>('CLIENT_URL')!
  }

  async checkout(checkoutProduct: CreateCheckoutInput): Promise<InitiateCheckout> {

    const ids = checkoutProduct.products.map(product => product.id)

    const products = await this.productsService.findByIds(ids)
    const lineItems = this.createStripeLineItems(products);

    const session = await this.stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${this.clientUrl}/receipt`,
      cancel_url: `${this.clientUrl}/cart`,
    });

    return {
      paymentMethod: 'stripe',
      paymentKey: session.id
    }
  }

  private createStripeLineItems(products: Product[]): Stripe.Checkout.SessionCreateParams.LineItem[] {
    return products.map((p) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: p.name,
          description: p.description,
        },
        unit_amount: p.price, // cents
      },
      quantity: 1,
    }));
  }
}
