var soap = require('soap');
var url = 'http://example.com/wsdl?wsdl';
var args = {name: 'value'};
soap.createClientAsync(url).then((client) => {
    return client.MyFunctionAsync(args);
}).then((result) => {
    console.log(result);
});
