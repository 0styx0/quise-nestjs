import { Entity, ObjectId, Column, ObjectIdColumn } from 'typeorm';

@Entity('products')
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;
  get id(): string {
    return this._id.toHexString();
  }

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;
}
