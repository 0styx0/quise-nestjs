
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
