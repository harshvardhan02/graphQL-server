const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: [String],
    products: [Product!]!
    product(id: Int!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  # object types have scaler types properties
  type Product {
    id: ID!
    name: String! # ! means it is required(non-nullable)
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;