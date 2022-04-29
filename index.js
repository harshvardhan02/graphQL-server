const { ApolloServer } = require("apollo-server");
const { allProducts, categories, reviews } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
// query for getting one object
// query {
//   product(id: 1) {
//     price
//     name
//     quantity,
//       description
//   }
// }

// write below query to get specific data from array of objects
// query {
//   products {
//     price
//   }
// }


// define the typeDefs and resolvers here
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation
  },
  context: {
    allProducts,
    categories,
    reviews
  }
});

// server config
server.listen().then(({ url }) => {
  console.log("server is running at", url)
})