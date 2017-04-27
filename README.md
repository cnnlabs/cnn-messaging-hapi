# cnn-messaging-hapi

[![NPM Package](https://img.shields.io/npm/v/cnn-messaging-hapi.svg?style=flat-square)](https://www.npmjs.org/package/cnn-messaging-hapi)
[![Build Status](https://img.shields.io/travis/cnnlabs/cnn-messaging-hapi.svg?branch=master&style=flat-square)](https://travis-ci.org/cnnlabs/cnn-messaging-hapi)
[![Coverage Status](https://img.shields.io/coveralls/cnnlabs/cnn-messaging-hapi.svg?branch=master&style=flat-square)](https://coveralls.io/github/cnnlabs/cnn-messaging-hapi)

This is a hapi.js plugin that wraps cnn-messaging-hapi to provide graceful shutdown.

The module creates an instance of messenger, that is bound to the hapi server object.

# setup

```
server.register({
    register: require('cnn-messaging-hapi'),
    options: {
        amqp: {
            connectionString: 'amqp://localhost:5672',
            exchangeName: 'EXAMPLE_APP'
        }
    }
}, (err) => {
    if (err) {
        throw err;
    }
});
```

See the documentation for [cnn-messaging](http://github.com/cnnlabs/cnn-messaging) for details.
