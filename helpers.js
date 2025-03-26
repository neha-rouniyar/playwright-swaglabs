const { expect } = require("playwright/test");

async function verifyErrorMessage(page,expectedErrorMessage){ 
    
    const errorMessage=await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain(expectedErrorMessage)
}

async function login(page,username,password) {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
}

module.exports={
    login,
    verifyErrorMessage
};