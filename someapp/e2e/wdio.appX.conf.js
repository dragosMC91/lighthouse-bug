/* eslint-disable */

const merge = require('deepmerge');
const wdioConf = require('../../e2e/wdio.e2e.conf.js');

exports.config = merge.all(
    [
        wdioConf.config,
        {
            specs: ['../someapp/e2e/test/dummy.desktop.test.js'],
        },
    ],
    { clone: false },
);
