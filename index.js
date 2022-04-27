const { ApolloServer, gql } = require("apollo-server");

// write below query to get specific data from array of objects
// query {
//   products {
//     price
//   }
// }

const typeDefs = gql`
  type Query {
    hello: [String],
    products: [Product!]!
  }

  # object types have scaler types properties
  type Product {
    name: String! # ! means it is required(non-nullable)
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["Harshvardhan", "Singh", "Baghel"];
    },
    products: () => {
      return [
        {
          name: "Laptop",
          description: "A laptop",
          quantity: 1,
          price: 1000,
          onSale: true
        },
        {
          name: "Mobile",
          description: "A mobile",
          quantity: 1,
          price: 2000,
          onSale: false
        }
      ];
    }
  },
};

// define the typeDefs and resolvers here
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// server config
server.listen().then(({ url }) => {
  console.log("server is running at", url)
})