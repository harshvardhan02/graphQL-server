const { ApolloServer, gql } = require("apollo-server");

// query for getting one object
// query {
//   product(id: 1) {
//     price
//     name
//     quantity,
//       description
//   }
// }

const allProducts = [{
  "id": 1,
  "name": "Saturn",
  "description": "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
  "quantity": 5,
  "price": 3.34,
  "onSale": false
}, {
  "id": 2,
  "name": "Mazda",
  "description": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
  "quantity": 18,
  "price": 8.83,
  "onSale": true
}, {
  "id": 3,
  "name": "Ford",
  "description": "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
  "quantity": 25,
  "price": 8.49,
  "onSale": true
}, {
  "id": 4,
  "name": "Infiniti",
  "description": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
  "quantity": 7,
  "price": 5.51,
  "onSale": true
}, {
  "id": 5,
  "name": "Mitsubishi",
  "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
  "quantity": 16,
  "price": 7.73,
  "onSale": false
}, {
  "id": 6,
  "name": "Chevrolet",
  "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non",
  "quantity": 5,
  "price": 2.00,
  "onSale": true
}, {
  "id": 7,
  "name": "Lincoln",
  "description": "erat curabitur gravida nisi at nibh in hac habitasse platea",
  "quantity": 3,
  "price": 0.12,
  "onSale": false
}, {
  "id": 8,
  "name": "Chevrolet",
  "description": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
  "quantity": 18,
  "price": 8.21,
  "onSale": false
}, {
  "id": 9,
  "name": "Acura",
  "description": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
  "quantity": 23,
  "price": 8.66,
  "onSale": false
}, {
  "id": 10,
  "name": "Jeep",
  "description": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
  "quantity": 15,
  "price": 4.71,
  "onSale": true
}]

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
    product(id: Int!): Product
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
    products: () => products,
    // resolver has 3 parameters parent, args and context
    product: (parent, args, context) => {
      const productId = args.id;
      console.log(allProducts.find(product => product.id === productId))
      const product = allProducts.find(product => product.id === productId);
      if (!product) return null;
      return product;
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