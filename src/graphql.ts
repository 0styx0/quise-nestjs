
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CheckoutStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

export class CheckoutProductInput {
    id: string;
}

export class CheckoutInput {
    products: CheckoutProductInput[];
}

export class CheckoutResult {
    status: CheckoutStatus;
    additionalInfo: string;
}

export class CheckoutProductResult {
    product: Product;
    result: CheckoutResult;
}

export abstract class IMutation {
    abstract checkout(checkoutProducts: CheckoutInput): CheckoutProductResult[] | Promise<CheckoutProductResult[]>;
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
