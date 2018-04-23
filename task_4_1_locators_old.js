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
/*        driver.getCapabilities().then(function(caps) {
            console.log(caps);

        });
 */
    });


    test.it('works with generators', function() {

        driver.get('http://localhost/litecart/admin');
        driver.findElement(By.css("[name = username]")).sendKeys('admin');
        driver.findElement(By.css("[name = password]")).sendKeys('admin');
        driver.findElement(By.css("[type = submit]")).click();
        driver.wait(until.titleIs('My Store'), 1000);


/*

        let i = 0;
        //let arr1;


        do{
       driver.findElements(By.css('.list-vertical li')).then(function(arr1){
            console.log('Found', arr1.length, 'Wiki links.' )});




            return;



            let j = 0;
            let arr2;
            do{
                arr2 = driver.findElements(By.css('.fa-stack li'));
                arr2[j].click();
                driver.findElement(By.css("h1")).isDisplayed();

                j = j+1;
            }

            while (j <= arr2.length);

            i = i+1;                   //Увеличиваем счетчик
        }
        while (i <= arr1.length);

*/

/*
        var elements = driver.findElements(By.css('.list-vertical li'));
        for (var i = 0; i < elements.length; i++) {

            elements = driver.findElements(By.css('.list-vertical li'));
            driver.findElement(By.css("h1")).isDisplayed();
        }
*/


     let arr1 =  driver.findElements(By.css('.list-vertical li'));

        for (let i=0; i<arr1.length; i++){

         driver.findElements(By.css('.list-vertical li')).then(function(arr2){


             driver.findElement(By.css("h1")).isDisplayed();





/*
        driver.findElement(By.css("h1")).isDisplayed();
        driver.findElement(By.css('#box-apps-menu.list-vertical ul')).then(function() {
            driver.is(aaa).click();
            driver.findElement(By.css("h1")).isDisplayed();
        });
*/

    });

    test.after(() => driver.quit());
});