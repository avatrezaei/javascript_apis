# GraphQL Project

This is a simple project demonstrating a GraphQL server implemented in Node.js using Express and express-graphql.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later recommended)
- npm (usually comes with Node.js)

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/avatrezaei/javascript_apis.git


```

Navigate into the project directory:
```
cd GraphQL
```

Install the dependencies:
```
npm install
```

Start the server:

```
node server.js

```

This will start the server at http://localhost:4000/graphql.

Using the Server
You can interact with the server using the GraphiQL IDE at http://localhost:4000/graphql.

To get started, try running the following query:

```
query {
  hello
}

```

You should see a response that looks like this:

```
{
  "data": {
    "hello": "Hello world!"
  }
}

```

Learning More
This server only implements a simple query. To learn more about GraphQL, check out the official GraphQL documentation.

