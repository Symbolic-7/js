/**
 * @fileoverview An example test that may be run using Mocha.
 *
 * Usage:
 *
 *     mocha -t 10000 selenium-webdriver/example/google_search_test.js
 *
 * You can change which browser is started with the SELENIUM_BROWSER environment
 * variable:
 *
 *     SELENIUM_BROWSER=chrome \
 *         mocha -t 10000 selenium-webdriver/example/google_search_test.js
 */

const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('CheckTitle', function() {
    let driver;


    test.before(function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
                driver.getCapabilities().then(function(caps) {
                    console.log(caps);
            });

    });

    test.it('works with generators', function() {

        driver.get('https://www.flickr.com/');
        driver.wait(until.elementLocated(By.css("#search-field")), 20000/*ms*/);
    });
        test.after(() => driver.quit());
});