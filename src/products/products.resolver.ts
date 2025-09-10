import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductInput } from 'src/graphql';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query('getProducts')
  getProducts() {
    return this.productService.findAll();
  }

  @Mutation('createProducts')
  async createProducts(
    @Args('products') products: CreateProductInput[],
  ): Promise<Product[]> {
    return this.productService.createMany(products);
  }
}
