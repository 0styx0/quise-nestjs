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
      imageUrl:
        'https://live.staticflickr.com/4006/4625525150_b85341accd_b.jpg',
    },
    {
      name: 'Running Shoes',
      slug: 'running-shoes',
      description: 'Comfortable shoes',
      price: 4999,
      imageUrl:
        'https://live.staticflickr.com/2215/2102196106_3894486bd2_b.jpg',
    },
    {
      name: 'Baseball Cap',
      slug: 'baseball-cap',
      description: 'Stylish hat',
      price: 1299,
      imageUrl: 'https://live.staticflickr.com/4149/5004795678_789e5900f9.jpg',
    },
    {
      name: 'Yacht',
      slug: 'luxury-yacht',
      description: 'High-end sailing experience',
      price: 250,
      imageUrl:
        'https://live.staticflickr.com/3949/15035857384_046901bb01_b.jpg',
    },
    {
      name: 'Coffee Cup',
      slug: 'ceramic-coffee-cup',
      description: 'Elegant handmade coffee cup',
      price: 1999,
      imageUrl: 'https://live.staticflickr.com/55/161419311_ac8eca3725_b.jpg',
    },
    {
      name: 'Modern Chair',
      slug: 'modern-chair',
      description: 'Comfortable and stylish seating',
      price: 8999,
      imageUrl:
        'https://live.staticflickr.com/8358/8411703484_e927ed4410_b.jpg',
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
