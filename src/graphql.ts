
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export abstract class IQuery {
    abstract getProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract getProducts(): Product[] | Promise<Product[]>;
}

type Nullable<T> = T | null;
