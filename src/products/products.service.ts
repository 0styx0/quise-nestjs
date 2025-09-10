import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Product } from './product.entity';
import { CreateProductInput } from 'src/graphql';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    //  must use MongoRep for advanced find operations https://typeorm.io/docs/drivers/mongodb/#using-mongoentitymanager-and-mongorepository
    private productsRepository: MongoRepository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
  
  findByIds(ids: ObjectId[]): Promise<Product[]> {
    const objectIds = ids.map(id => new ObjectId(id));
    return this.productsRepository.find({
      where: { _id: { $in: objectIds } },
    });
  }
  
  createMany(products: CreateProductInput[]) {

    const productsToSave = products.map(
      product => this.productsRepository.create(product)
    )
    
    return this.productsRepository.save(productsToSave)
  }
}
