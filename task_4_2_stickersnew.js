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


        driver.findElements(By.css('.image-wrapper')).then(function (goods) {
            console.log('Found', goods.length, 'goods.');
/*
            driver.findElements(By.css('.sticker')).then(function (stickers) {
                console.log('Found', stickers.length, 'sticker.');

            });
*/

                for (let i = 5; i <= goods.length; i++) {
                    //driver.findElement(By.xpath("//div[@class = 'image-wrapper']["+ i +"]")).click();

                driver.findElements(By.xpath("//div[@class = 'image-wrapper']/div["+ i +"]")).then(function (sticker) {
                    console.log('Found', sticker.length, 'sticker.');
             //       var el = 1;
             //     el = sticker.length;

                });
            }

         });
    });

    test.after(() => driver.quit());
});