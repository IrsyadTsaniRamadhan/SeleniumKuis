const{Builder, By, Key, Util} = require("selenium-webdriver");
async function Login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms", Key.RETURN);
    
    
}
Login();