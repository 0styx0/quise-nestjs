

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
1. Query order info via `getOrder`

### Next steps

Some features are beyond the scope of this project. Here's what would do next:

- When someone checks out: Update the DB to remove product by using the Stripe webhook
- Add a fullfillment system