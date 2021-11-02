/* eslint-disable */

exports.config = {
    // wdio logging and reporting options
    logLevel: 'error',
    coloredLogs: true,
    bail: 0,
    waitforTimeout: 10000,
    // while in debug mode (using REPL or browser.debug()), we don't want the test to timeout
    connectionRetryTimeout: process.env.DEBUG ? 999999 : 90000,
    connectionRetryCount: 0,
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        // while in debug mode (using REPL or browser.debug()), we don't want the test to timeout
        timeout: process.env.DEBUG ? 999999 : 60000,
        require: ['mocha-steps'],
        retries: 0,
    },
};
