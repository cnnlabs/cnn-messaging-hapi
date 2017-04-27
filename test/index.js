'use strict';

const messengerPlugin = require('../index');

const chai = require('chai');
chai.should();

const Hapi = require('hapi');
const server = new Hapi.Server();

describe('hapi plugin', function () {
    before(function (done) {
        server.connection({
            host: 'localhost',
            port: 8000
        });
        server.register({
            register: messengerPlugin,
            options: {
                amqp: {
                    connectionString: 'amqp://localhost:5672',
                    exchangeName: 'EXAMPLE_APP'
                }
            }
        }, function (err) {
            if (err) {
                return done(err);
            }
            server.start(done);
        });

    });

    after(function (done) {
        server.stop(done);
    });

    it('should allow messages to be published', function () {
        return server.app.messenger.publish('test.topic', new server.app.Message({event: {some: 'thing'}}));
    });
});
