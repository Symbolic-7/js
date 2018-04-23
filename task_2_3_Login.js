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

        driver.get('http://localhost/litecart/admin');
        driver.findElement(By.css("[name = username]")).sendKeys('admin');
        driver.findElement(By.css("[name = password]")).sendKeys('admin');
        driver.findElement(By.css("[type = submit]")).click();
        driver.wait(until.titleIs('My Store'), 1000);

    });
        test.after(() => driver.quit());
});