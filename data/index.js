var Thalassa = require('thalassa');

var env = process.env;

var server = new Thalassa.Server({
    host          : "0.0.0.0",
    port          : 5001,
    apihost       : "0.0.0.0",
    apiport       : 9000,
    redisHost     : env["REDIS_PORT_6379_TCP_ADDR"] || null,
    redisPort     : env["REDIS_PORT_6379_TCP_PORT"] ? parseInt(env["REDIS_PORT_6379_TCP_PORT"])
                                                    : null,
    redisDatabase : env["REDIS_DATABASE"] ? parseInt(env["REDIS_DATABASE"])
                                          : 0,
    reaperFreq    : env["REAPERFREQ"] ? parseInt(env["REAPERFREQ"])
                                      : 2000,
    log           : require('thalassa/lib/defaultLogger')(env["DEBUG"] === "true" ? 'debug'
                                                                                  : 'error')
});
