// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");




const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world! Currently GraphQL has been disabled for this whole Application";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,  
  playground: true,
  cors:true,
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});