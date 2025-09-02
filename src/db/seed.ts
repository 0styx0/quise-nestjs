import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Product } from '../products/product.entity';

const AppDataSource = new DataSource({
  type: 'mongodb' as const,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  extra: {
    authSource: process.env.DB_AUTHSOURCE,
  },
  synchronize: true,
  entities: [Product],
});

async function seed() {
  await AppDataSource.initialize();

  const productRepo = AppDataSource.getMongoRepository(Product);

  await productRepo.deleteMany({});

  const products = [
    {
      name: 'T-Shirt',
      slug: 't-shirt',
      description: '100% cotton',
      price: 1999,
      imageUrl: '/images/tshirt.png',
    },
    {
      name: 'Running Shoes',
      slug: 'running-shoes',
      description: 'Comfortable shoes',
      price: 4999,
      imageUrl: '/images/shoes.png',
    },
    {
      name: 'Baseball Cap',
      slug: 'baseball-cap',
      description: 'Stylish hat',
      price: 1299,
      imageUrl: '/images/hat.png',
    },
  ];

  await productRepo.insertMany(products);
  console.log('Database seeded successfully');

  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Seeding failed', err);
  process.exit(1);
});
