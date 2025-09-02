

## Setup the project

See the [README](README.md)

### Accessing the DB via CLI

Assuming you use the default values from `.env.example` in your `.env`:

```bash
docker-compose exec -it mongo mongosh -u db_admin -p db_password --authenticationDatabase admin
```