

## Setup the project
- Clone the repo
- Create the database:
    - docker-compose up -d
    - yarn ts-node src/db/seed.ts

### Accessing the DB via CLI
docker-compose exec -it mongo mongosh -u db_admin -p db_password --authenticationDatabase admin