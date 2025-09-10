### About

Nest.JS GraphQL server for an e-commerce website.

Capabilities:
- Fetch products from database
- Initiate checkout via Stripe
- Fetch order details after checkout

![Running a query in the GraphQL server](https://github.com/user-attachments/assets/c9a00bfd-5292-4b15-a1d9-7b212f49543a)

### Technologies
- TypeScript
- GraphQL
- Nest.JS
- MongoDB
- TypeOrm
- Stripe
- Docker

### How to use

#### Setup
1. Clone the repo
1. Create a `.env` using `.env.example` as a template
1. Create the database: `docker-compose up -d`
1. Seed the database:`yarn ts-node src/db/seed.ts`
1. Start the app: `yarn start:dev`

#### Hit the server

1. Navigate to [http://localhost:3000/graphql](http://localhost:3000/graphql)
1. Create a request
