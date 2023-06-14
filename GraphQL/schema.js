const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema 
  } = require('graphql');
  
  const QueryRootType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => "Hello world!"
      }
    }
  });
  
  module.exports = new GraphQLSchema({ query: QueryRootType });
  