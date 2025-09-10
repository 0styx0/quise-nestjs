import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query('getProducts')
  getProducts() {
    return this.productService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Mutation('createProducts')
  async createProducts(
    @Args('products') products: CreateProductInput[],
  ): Promise<Product[]> {
    return this.productService.createMany(products);
  }
}
