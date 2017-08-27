var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('');
driver.findElement(By.id('fabulous')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
driver.quit();