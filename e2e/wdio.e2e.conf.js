/* eslint-disable */

const merge = require('deepmerge');
const wdioConf = require('./wdio.base.conf');

// if the HEADLESS environment variable is set,
// run the browsers in headless mode, which speeds
// up test execution
var enableHeadless = !!process.env.E2E_ENABLE_HEADLESS;

const drivers = {
    chrome: { version: '95.0.4638.54' }, // https://chromedriver.chromium.org/
    firefox: { version: '0.29.1' }, // https://github.com/mozilla/geckodriver/releases
};
exports.config = merge.all([
    wdioConf.config,
    {
        maxInstances: 1,
        capabilities: [
            {
                browserName: 'chrome',
                'goog:platformName': 'desktop',
                exclude: [
                    '../*/e2e/test/specs/**/*mobile*.js',
                ],
                'goog:loggingPrefs': { browser: 'WARNING' },
                'goog:chromeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-dev-shm-usage',
                        enableHeadless ? '--headless' : '--disable-headless-mode',
                        '--window-position=1050,210',
                        '--window-size=1366,768',
                        '--user-agent=Mozilla/5.0 (SL-Automation-Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
                    ],
                },
            },
        ],

        services: [
            'devtools',
            [
                'selenium-standalone',
                {
                    logPath: 'e2e/logs',
                    installArgs: {
                        drivers,
                    },
                    args: {
                        drivers,
                    },
                },
            ],
            'intercept',
        ],
    },
]);
