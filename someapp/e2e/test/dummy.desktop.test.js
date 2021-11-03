describe('Some dummy test', () => {
    step('should open page', () => {
        browser.url("https://zameen.com");
        browser.cdp('Profiler', 'enable');
    });
});
