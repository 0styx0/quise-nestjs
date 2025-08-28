
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface IQuery {
    products(): Product[] | Promise<Product[]>;
    product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
