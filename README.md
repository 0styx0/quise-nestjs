### About

Nest.JS GraphQL server for an e-commerce website.

![Running a query in the GraphQL server](https://private-user-images.githubusercontent.com/18606569/484627989-61b56a97-3892-41f8-86ff-edaffe4e45a5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY4MjQ2OTgsIm5iZiI6MTc1NjgyNDM5OCwicGF0aCI6Ii8xODYwNjU2OS80ODQ2Mjc5ODktNjFiNTZhOTctMzg5Mi00MWY4LTg2ZmYtZWRhZmZlNGU0NWE1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTAyVDE0NDYzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZhNWI0OGViOTE1NWY1MmJhODEyMWRlMzI3YmQ5MjQyOTBkNTZmMzYzYTJiYWMxNjJjMjdjMjU2ODEzNDkyYmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6Wa0vLHY-Sk22ztiYnx2w-3PUh3p5uVYIJvp99KujZc)

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
