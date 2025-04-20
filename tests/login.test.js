const { test, expect, request } = require('@playwright/test');
const LoginPage=require('../pages/login.page')
const {verifyErrorMessage,login}=require('../helpers')


test('should login successfully',async({page})=>{
    await login(page,'standard_user','secret_sauce')

    // Check if an element is visible after an action
    await expect(page.locator('#shopping_cart_container')).toBeVisible();

    //these both approaches are used to check for URLs. but the first one checks for the word inventory. if any part of URL contains given word, it executes else fails
    // where as below 2nd one URL shoudl be exactly the same as in the URL. 2nd one is used for fixed URLs
    await expect(page).toHaveURL(/inventory/);
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

    await page.waitForTimeout(1000)
})

test('Empty submit with assertion',async({page})=>{
    await login(page,'','')
    await verifyErrorMessage(page,'Epic sadface: Username is required')
    await page.waitForTimeout(1000)
})

test('invalid login credentials',async({page})=>{
    await login(page,'invalid-user','invalid-password')
    await verifyErrorMessage(page,'Epic sadface: Username and password do not match any user in this service')
    await page.waitForTimeout(1000)
})


