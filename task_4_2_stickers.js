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

test.describe('CheckStickers', function() {
    let driver;


    test.before(function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        /*        driver.getCapabilities().then(function(caps) {
                    console.log(caps);
            });
        */
    });

    test.it('works with generators', function() {

        driver.get('http://localhost/litecart/en/');
        driver.wait(until.elementLocated(By.css('#box-most-popular')), 10000/*ms*/);
        //driver.findElement(By.css('#box-most-popular')).isDisplayed();


        driver.findElements(By.css('.product')).then(function (goods) {
            console.log('Found', goods.length, 'goods в блоке популярные.');

            for (let i = 1; i <= goods.length; i++) {
                driver.findElements(By.css("#box-most-popular li:nth-child(" + i + ") div.sticker")).then(function (sticker) {
                    console.log('Found', sticker.length, 'sticker.');

                    var assert = require('assert');
                    assert.equal(sticker.length,1); //OK

                });
            }
        });
    });
    test.after(() => driver.quit());
});