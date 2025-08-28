import { Entity, ObjectId, Column, ObjectIdColumn } from 'typeorm';

@Entity('products')
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;
}
