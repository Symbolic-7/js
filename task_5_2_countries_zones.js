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

test.describe('Zones', function() {
    let driver;

    test.before(function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
/*        driver.getCapabilities().then(function(caps) {
                    console.log(caps);
        });*/
        });

    test.it('works with generators', function() {

        driver.get('http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones');
        driver.findElement(By.css("[name = username]")).sendKeys('admin');
        driver.findElement(By.css("[name = password]")).sendKeys('admin');
        driver.findElement(By.css("[type = submit]")).click();
        driver.wait(until.elementLocated(By.css('#content')), 10000/*ms*/);
        driver.findElement(By.css('#content')).isDisplayed();

        let arr1 = [];

        driver.findElements(By.css("#content > form > table > tbody > tr")).then(function (rows_geo) {
            for (let i = 2; i < rows_geo.length; i++) {
                driver.findElement(By.css("#content tr:nth-child(" + i + ") > td:nth-child(" + 3 + ") > a")).click();
                driver.findElements(By.css("#table-zones > tbody > tr")).then(function (rows_zones) {
                    for (let j = 2; j < rows_zones.length; j++) {
                        driver.findElement(By.css("#table-zones tr:nth-child(" + j + ") > td:nth-child(" + 3 + ") select [selected=selected]")).getAttribute("textContent").then(function (zone) {
                            arr1.push(zone);
                            console.log(arr1);
                            let arr1sort = arr1;
                            arr1sort.sort();
                            let assert = require('assert');
                            assert.equal(arr1,arr1sort); //OK
                        });
                    }
                    driver.findElement(By.css('#content button[name=cancel]')).click();
                    arr1 = [];
                    console.log('----------------------------------------------------------');
                });
            }
        });
    });

    test.after(() => driver.quit());
});