
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

export abstract class IMutation {
    abstract checkout(checkoutProducts: CheckoutInput): Product[] | Promise<Product[]>;
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
