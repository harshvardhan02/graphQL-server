const { ApolloServer, gql } = require("apollo-server");

// Scaler type:- String, Int, Float, Boolean, ID
const typeDefs = gql`
  type Query {
    hello: String,
    numberOfAnimals: Int,
    price: Float,
    isTrue: Boolean,
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Harshvardhan";
    },
    numberOfAnimals: () => {
      return 100;
    },
    price: () => {
      return 100.12;
    },
    isTrue: () => {
      return true;
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