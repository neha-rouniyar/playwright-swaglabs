const { test, expect } = require('@playwright/test');
const LoginPage=require('../pages/login.page')

test('should login successfully',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await page.waitForTimeout(1000)
})

test('Empty submit with assertion',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.open()
    await loginPage.login('','')
    //assertion
    const errorMessage=await loginPage.getErrorMessage()
    expect(errorMessage).toContain('Epic sadface: Username is required');

    await page.waitForTimeout(1000)
})

test('invalid login credentials',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.open()
    await loginPage.login('invalid-username','invalid-password')

    //assertion
    const errorMessage=await loginPage.getErrorMessage()
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    await page.waitForTimeout(1000)

})