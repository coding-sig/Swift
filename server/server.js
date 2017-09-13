/**
 * A Simple Restify Server Entry Point
 */
var restify = require('restify');
var server = restify.createServer();

var BASE_REST_URL = '/api/';

function respond (req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function getRestEndpoint (path) {
    return BASE_REST_URL + path;
}

server.get(getRestEndpoint('hello/:name'), respond);
//server.pre(restify.plugins.dedupeSlashes());

server.get('/', function(req, res, next) {
    res.send('home');
    return next();
});
server.use(function (req, res, next) {
    console.warn('run for all routes!');
    return next();
});
server.on('InternalServer', function (req, res, err, callback) {
    // this will get fired first, as it's the most relevant listener
    return callback();
});  
server.on('restifyError', function (req, res, err, callback) {
    // this is fired second.
    return callback();
});

server.listen(4300, function () {
    console.log('%s listening at %s', server.name, server.url);
});
