

## Setup the project

See the [README](README.md)

### Accessing the DB via CLI

Assuming you use the default values from `.env.example` in your `.env`:

```bash
docker-compose exec -it mongo mongosh -u db_admin -p db_password --authenticationDatabase admin
```

### Application Flow

1. Query items via `getProducts`
1. Submit an order via `checkout`
    1. Creates Stripe session
    1. Saves session to DB
1. Query order status via `getOrder`


### Authentication
```bash
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "Test", "password": "test"}'
```

### GraphQL example queries

```graphql
query QuiseQuery {
  getProducts {
    id
    name
    price
  }
}

mutation Mutation($checkoutProducts: CheckoutInput!) {
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
  "checkoutProducts": {
    "products":[
      {
        "id": "68c10e6eeefb4238c12f8f5e"
      }
    ]
  },
  "paymentKey": "cs_test_b1faXh53XZAQPTZCeYr4daphIoXxjaqVMEdX9U3npXUIpdA58ITzV21TkO"
}
```

### Credit
- Stock images: https://openverse.org