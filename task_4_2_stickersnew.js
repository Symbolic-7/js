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
        //driver.wait(until.titleIs('My Store'), 10000);


            driver.findElements(By.css('#box-most-popular li.product')).then(function (goods) {
                console.log('Found', goods.length, 'goods в блоке популярные.');

                for (let i = 1; i <= goods.length; i++) {
                    driver.findElements(By.css("#box-most-popular li:nth-child(" + i + ") div.sticker")).then(function (sticker) {
                        console.log('Found', sticker.length, 'sticker.');

                        var assert = require('assert');
                        assert.equal(sticker.length,1); //OK
                    });
                }
            });


            driver.findElements(By.css('#box-campaigns li.product')).then(function (goods2) {
            console.log('Found', goods2.length, 'goods в блоке компании.');

                for (let i = 1; i <= goods2.length; i++) {
                    driver.findElements(By.css("#box-campaigns li:nth-child("+ i +") div.sticker")).then(function (sticker2) {
                        console.log('Found', sticker2.length, 'sticker.');

                        var assert = require('assert');
                        assert.equal(sticker2.length,1); //OK
                    });
                }
            });


            driver.findElements(By.css('#box-latest-products li.product')).then(function (goods3) {
                console.log('Found', goods3.length, 'goods в блоке последние.');

                for (let i = 1; i <= goods3.length; i++) {
                    driver.findElements(By.css("#box-latest-products li:nth-child("+ i +") div.sticker")).then(function (sticker3) {
                        console.log('Found', sticker3.length, 'sticker.');

                        var assert = require('assert');
                        assert.equal(sticker3.length,1); //OK
                    });
                }
            });


    });

    test.after(() => driver.quit());
});