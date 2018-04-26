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

test.describe('Countries', function() {
    let driver;


    test.before(function () {
        driver = new Builder().forBrowser('chrome').build();
        //driver.manage().window().maximize();
        /*        driver.getCapabilities().then(function(caps) {
                    console.log(caps);
            });
        */
    });

    test.it('works with generators', function() {

        driver.get('http://localhost/litecart/admin/?app=countries&doc=countries');
        //driver.get('http://localhost/litecart/admin');
        driver.findElement(By.css("[name = username]")).sendKeys('admin');
        driver.findElement(By.css("[name = password]")).sendKeys('admin');
        driver.findElement(By.css("[type = submit]")).click();
        //driver.wait(until.titleIs('My Store'), 1000);
        driver.wait(until.elementLocated(By.css('#content')), 10000/*ms*/);
        driver.findElement(By.css('#content')).isDisplayed();

        let arr1 = [];
        let arr2 = [];

        driver.findElements(By.css(".dataTable tr.row")).then(function (rows) {
        console.log('Found', rows.length, 'rows.');

            for (let j = 2; j <= rows.length; j++) {
                driver.findElement(By.css("#content > form > table > tbody > tr:nth-child(" + j + ") > td:nth-child(" + 5 + ") a")).getAttribute("textContent").then(function (country) {
                 arr1.push(country);
                    //console.log(arr1);
                    driver.findElement(By.css("#content > form > table > tbody > tr:nth-child(" + j + ") > td:nth-child(" + 6 + ")")).getAttribute("textContent").then(function (zones) {
                        //console.log(zones);
                        if (zones > 0) {
                            driver.findElement(By.css("#content > form > table > tbody > tr:nth-child(" + j + ") > td:nth-child(" + 5 + ") > a")).click();
                            driver.findElements(By.css("#table-zones > tbody > tr")).then(function (subrows) {
                                //console.log('Found', subrows.length, 'subrows.');
                                for (let k = 2; k <= subrows.length; k++) {
                                    driver.findElement(By.css("#table-zones > tbody > tr:nth-child(" + k + ") > td:nth-child(" + 3 + ")")).getAttribute("textContent").then(function (substate) {
                                        arr2.push(substate);
                                        //console.log(arr2);
                                    });
                                }
                                driver.findElement(By.css("[name=cancel]")).click();
                                console.log(arr2);
                                var arr2sort = arr2;
                                arr2sort.sort();
                                var assert = require('assert');
                                assert.equal(arr2,arr2sort); //OK
                            });
                        }
                    });
                    //console.log(arr1);
                   var arr1sort = arr1;
                    arr1sort.sort();
                    var assert = require('assert');
                    assert.equal(arr1,arr1sort); //OK
                });
            }
        });
    });

    test.after(() => driver.quit());
});