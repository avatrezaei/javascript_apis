const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
