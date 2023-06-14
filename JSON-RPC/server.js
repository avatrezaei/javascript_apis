const jayson = require('jayson');

// create a server
const server = jayson.server({
  add: function(args, callback) {
    callback(null, args[0] + args[1]);
  }
});

server.http().listen(3000, function() {
  console.log('JSON-RPC server listening on port 3000');
});
