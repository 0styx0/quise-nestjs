### About

Nest.JS GraphQL server for an e-commerce website.

Capabilities:
- Add products to the catalog (only after logging in) 
- Fetch a list of products
- Initiate checkout via Stripe
- View order details after checkout

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

#### Usage

1. Generate a JWT authentication token:
    ```bash
    curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "Test", "password": "test"}'
    ```
1. Navigate to [http://localhost:3000/graphql](http://localhost:3000/graphql)
1. Add `Authorization` header with a value of `Bearer <token>`
1. Create a request


### GraphQL example queries

```graphql
query QuiseQuery {
  getProducts {
    id
    name
    price
  }
}

mutation Mutation($newProducts: [CreateProductInput!]!, $checkoutProducts: CheckoutInput!) {
  createProducts(products: $newProducts) {
    name
    id
  }

  checkout(checkoutProducts: $checkoutProducts) {
    paymentKey
  }
}

query FetchOrder($paymentKey: String!) {
  fetchOrder(paymentKey: $paymentKey) {
    lineItems {
      name
      priceUnit
    }
    priceTotal
  }
}
```

#### Variables
```json
{
  "newProducts": [
    {
      "name": "Bicycle",
      "slug": "bicycle",
      "description": "The ultimate in stylish travel",
      "price": 8999,
      "imageUrl": "https://live.staticflickr.com/3182/3026496994_473fe0571b_b.jpg"
    }
  ],
  "checkoutProducts": {
    "products":[
      {
        "id": "<product_id>"
      }
    ]
  },
  "paymentKey": "<paymentKey_from_checkout_query>"
}
```

### Credit
- Stock images: https://openverse.org
