import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { Product } from 'src/graphql';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_KEY')!);
  }

  async createCheckoutSession(
    products: Product[],
    successUrl: string,
    cancelUrl: string,
  ): Promise<Stripe.Checkout.Session> {
    const lineItems = this.createLineItems(products);

    return this.stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  }

  /**
   * @param expand Optional fields to expand
   */
  async retrieveCheckoutSession(
    sessionId: string,
    expand: string[] = ['line_items'],
  ): Promise<Stripe.Checkout.Session> {
    return this.stripe.checkout.sessions.retrieve(sessionId, { expand });
  }

  /**
   * Convert products to Stripe line items
   */
  private createLineItems(
    products: Product[],
  ): Stripe.Checkout.SessionCreateParams.LineItem[] {
    return products.map((p) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: p.name,
          description: p.description,
        },
        unit_amount: p.price * 100, // in cents
      },
      quantity: 1,
    }));
  }
}