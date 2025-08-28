import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query()
  getProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Query(() => [Product])
  getProducts() {
    return this.productService.findAll();
  }
}
