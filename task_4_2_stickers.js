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


        driver.findElements(By.css('.product')).then(function (goods) {
            console.log('Found', goods.length, 'goods.');

            driver.findElements(By.css('.sticker')).then(function (stickers) {
                console.log('Found', stickers.length, 'sticker.');

                //product.length == stickers.length);
            });

            driver.findElement(By.css(".product li:nth-child.sticker")).isDisplayed();

            for (let i = 1; i < goods.length; i++) {

                //driver.findElement(By.xpath("//*[@class = 'product']/li[" + i + "]"));
          let good = driver.findElement(By.css(".product li:nth-child(" + i + ")"));
            let sticker = good.findElements(By.css(".sticker")).isDisplayed();



/*
                driver.findElements(By.css('.docs li')).then(function (sublinks) {
                    console.log('Found', sublinks.length, 'sublinks.');

                    for (let j = 2; j <= sublinks.length; j++) {

                        driver.findElement(By.xpath("//*[@class = 'docs']/li[" + j + "]")).click();
                        driver.findElement(By.css("h1")).isDisplayed();
                    }
                });
            }
        });*/
    });

    test.after(() => driver.quit());
});