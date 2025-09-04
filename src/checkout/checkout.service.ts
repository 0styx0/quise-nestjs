import { Injectable } from '@nestjs/common';
import { CreateCheckoutInput } from './dto/create-checkout.input';
import { ProductsService } from 'src/products/products.service';
import { ObjectId } from 'mongodb';
import { CheckoutProductResult, CheckoutStatus, Product } from 'src/graphql';

@Injectable()
export class CheckoutService {
  constructor(private readonly productsService: ProductsService) {}

  async checkout(checkoutProduct: CreateCheckoutInput): Promise<CheckoutProductResult[]> {

    const ids = checkoutProduct.products.map(product => product.id)
    
    const checkedOut = await this.productsService.findByIds(ids)
    
    return checkedOut.map(this.setCheckoutResult)
    
  }
  
  private setCheckoutResult(checkedOut: Product): CheckoutProductResult {
    
      // example checking if query succeeded. todo: replace with stripe's output
      if (!ObjectId.isValid(checkedOut.id)) {
        return {
          product: checkedOut,
          result: {
            status: CheckoutStatus.FAILED,
            additionalInfo: 'Failure - unable to find product id'
          }

        }
      }
      return {
        product: checkedOut,
          result: {
            status: CheckoutStatus.SUCCESS,
            additionalInfo: ''
          }
      }
    }
    
  }
