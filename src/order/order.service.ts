import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/stripe/stripe.service';
import util from 'util';

@Injectable()
export class OrderService {

  constructor(private readonly stripeService: StripeService) {
  }

    async getOrder(paymentKey: string) {
        const checkout = await this.stripeService.retrieveCheckoutSession(paymentKey);
        
        if (!checkout.line_items) {
            return {
                priceTotal: 0,
                customerEmail: '',
                lineItems: [],
            }
        }

        const lineItems = checkout.line_items.data.map(item => ({
            id: item.id,
            name: item.description ?? item.price?.product ?? 'Unknown',
            priceUnit: item.price?.unit_amount,
        }));

        return {
            priceTotal: checkout.amount_total,
            customerEmail: checkout.customer_email || '',
            lineItems,
        };
    }

}
