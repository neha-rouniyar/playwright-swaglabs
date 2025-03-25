const { test, expect } = require('@playwright/test');

test('should login successfully',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/');

    const usernameField=page.locator('#user-name');
    const passwordField=page.locator('#password');
    const buttonField=page.locator('#login-button');

    await usernameField.fill('standard_user');
    await passwordField.fill('secret_sauce');
    await buttonField.click();

    //to stop/pause the browser for a few secondsas the browser closes automatically when no such commmand given
    // await page.pause() 
    await page.waitForTimeout(1000)
})

test('Empty submit with assertion',async({page})=>{
    
    await page.goto('https://www.saucedemo.com/v1/');
    
    const buttonField=page.locator('#login-button');
    await buttonField.click();

    //assertion
    const errorMessageLocator = page.locator('[data-test="error"]');
    await expect(errorMessageLocator).toBeVisible();
    const errorText = await errorMessageLocator.textContent();
    expect(errorText).toContain('Epic sadface: Username is required');

    await page.waitForTimeout(1000)

})


test('invalid login credentials',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/');

    const usernameField=page.locator('#user-name');
    const passwordField=page.locator('#password');
    const buttonField=page.locator('#login-button');

    await usernameField.fill('invalid-user');
    await passwordField.fill('invalid-password');
    await buttonField.click();

    //assertion
    const errorMessageLocator = page.locator('[data-test="error"]');
    await expect(errorMessageLocator).toBeVisible();
    const errorText = await errorMessageLocator.textContent();
    expect(errorText).toContain('Epic sadface: Username and password do not match any user in this service');

    await page.waitForTimeout(1000)

})