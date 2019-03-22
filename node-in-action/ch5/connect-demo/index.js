const connect = require('connect');
const setup = require('./setup');
const errorHandler = require('./errorHandler')

function hello (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

function testError (req, res, next) {
  foo();
  next();
}

connect()
  .use(setup(':method :url :httpVersion'))
  .use(testError)
  .use(hello)
  .use(errorHandler)
  .listen(3000);