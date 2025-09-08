### About

Nest.JS GraphQL server for an e-commerce website.

![Running a query in the GraphQL server](https://github.com/user-attachments/assets/27731761-6bf7-475c-91a5-823b33ea70c1)

### Technologies
- TypeScript
- GraphQL
- Nest.JS
- MongoDB
- TypeOrm
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
