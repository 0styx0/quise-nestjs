## Core Features
- Home page – Lists products
- Product page – Dynamic routes (/product/[id]) using getStaticPaths + getStaticProps.
- Cart page – Add/remove items, store cart in React state or localStorage.
- Checkout – Use Stripe test mode with Checkout Sessions. Redirect on purchase.
- Success page – Confirmation after payment.
- Deployment – Vercel (native for Next.js) with environment variables for Stripe keys


### Technologies
- MongoDB
- GraphQL
- Nest.JS
- TypeScript
- typeorm

### Objects
```graphql
type Product {
  id: ID!
  name: String!
  description: String
  price: Int!
  imageUrl: String
}

type Order {
  id: ID!
  items: [CartItem!]!
  total: Int!
  paymentStatus: String!
  createdAt: String!
}
```
### Operations
- `list($id, $amount, $offset) -> `
