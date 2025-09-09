
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CheckoutProductInput {
    id: string;
}

export class CheckoutInput {
    products: CheckoutProductInput[];
}

export class InitiateCheckout {
    paymentMethod: string;
    paymentKey: string;
}

export abstract class IMutation {
    abstract checkout(checkoutProducts: CheckoutInput): InitiateCheckout | Promise<InitiateCheckout>;

    abstract fetchOrder(paymentKey: string): StripeCheckoutSession | Promise<StripeCheckoutSession>;
}

export class StripeLineItem {
    id: string;
    name: string;
    priceUnit: number;
}

export class StripeCheckoutSession {
    id: string;
    priceTotal: number;
    customerEmail: string;
    lineItems: StripeLineItem[];
}

export class Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export abstract class IQuery {
    abstract getProducts(): Product[] | Promise<Product[]>;
}

type Nullable<T> = T | null;
