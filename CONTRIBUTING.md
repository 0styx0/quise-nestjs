

## Setup the project
- Clone the repo
- Create a `.env` using `.env.example` as a template
- Create the database:
    - `docker-compose up -d`
    - `yarn ts-node src/db/seed.ts`
- Start the app: `yarn start:dev`

### Accessing the DB via CLI
Assuming you use the default values from `.env.example` in your `.env`:

`docker-compose exec -it mongo mongosh -u db_admin -p db_password --authenticationDatabase admin`