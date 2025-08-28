import { DataSource } from 'typeorm';
import { Product } from '../products/product.entity';

// TypeORM connection using auth from Docker Compose
const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb://db_admin:db_password@localhost:27017/ecommerce?authSource=admin',
  database: 'ecommerce',
  synchronize: true,
  entities: [Product],
});

async function seed() {
  await AppDataSource.initialize();

  const productRepo = AppDataSource.getMongoRepository(Product);

  // Optional: clear existing products
  await productRepo.deleteMany({});

  // Insert seed products
  const products = [
    {
      name: 'T-Shirt',
      description: '100% cotton',
      price: 1999,
      imageUrl: '/images/tshirt.png',
    },
    {
      name: 'Running Shoes',
      description: 'Comfortable shoes',
      price: 4999,
      imageUrl: '/images/shoes.png',
    },
    {
      name: 'Baseball Cap',
      description: 'Stylish hat',
      price: 1299,
      imageUrl: '/images/hat.png',
    },
  ];

  await productRepo.insertMany(products);
  console.log('Database seeded successfully via NestJS + TypeORM!');

  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Seeding failed', err);
  process.exit(1);
});
