const jrpc = require('jrpc-client');

const client = new jrpc('http://localhost:8080/jsonrpc');

client.call('subtract', [42, 23])
    .then(result => console.log(result))
    .catch(err => console.error(err));
