describe('Some dummy test', () => {
    step('should open page', () => {
        browser.url("https://webdriver.io/");
        console.log("formatted number:", new Intl.NumberFormat('bn').format(10000));
    });
});
