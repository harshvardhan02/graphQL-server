const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: [String]
    # hello: [String!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["Harshvardhan", "Kumar", "Singh"];
      // return ["Harshvardhan", null, "Singh"];
    },
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