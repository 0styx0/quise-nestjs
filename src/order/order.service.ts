import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class OrderService {

  constructor(private readonly stripeService: StripeService) {
  }

    async getOrder(paymentKey: string) {
        const checkout = await this.stripeService.retrieveCheckoutSession(paymentKey);
        
        if (!checkout.line_items) {
            return {
                priceTotal: -1,
                lineItems: [],
                id: -1
            }
        }

        const lineItems = checkout.line_items.data.map(item => ({
            id: item.id,
            name: item.description ?? item.price?.product ?? 'Unknown',
            priceUnit: item.price?.unit_amount,
        }));

        return {
            id: checkout.id,
            priceTotal: checkout.amount_total,
            lineItems,
        };
    }

}
