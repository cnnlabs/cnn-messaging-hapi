'use strict';

const pkg = require('./package.json');
const Messenger = require('cnn-messaging').AmqpMessenger;
const Message = require('cnn-messaging').Message;

exports.register = function (server, options, next) {
    options.http = server && server.connections.length && server.connections[0] && server.connections[0].listener;
    server.expose('messenger', new Messenger(options));
    server.expose('Message', Message);

    server.ext({
        type: 'onPreStart',
        method: (srv, nxt) => {
            srv.plugins[pkg.name].messenger.start()
                .then(nxt, nxt);
        }
    });

    server.ext({
        type: 'onPostStop',
        method: (srv, nxt) => {
            srv.plugins[pkg.name].messenger.stop()
                .then(nxt, nxt);
        }
    });

    next();
};

exports.register.attributes = {
    pkg
};
