const { test, expect, request } = require('@playwright/test');
const LoginPage=require('../pages/login.page')
const {verifyErrorMessage,login}=require('../helpers')

test('Validating Simple API response',async({request})=>{
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    expect(res.status()).toBe(200);
    const responseBody= await res.json();
    expect(responseBody.title).not.toBeNull();
})

test('Validating API response headers',async({request})=>{   
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    expect(res.headers()['content-type']).toContain('application/json');
})

test('Sending Data in API POST request',async({request})=>{
    const response= await request.post('https://jsonplaceholder.typicode.com/posts', {
        data:{
                "userId": 17,
                "id": 200,
                "title": "This is Demo title",
                "body": "This is demo body data"
        }
    })
})

test('Validating API Response Time',async({request})=>{
    // since playwright does not directly support for validating api response timings through the request module, so we use performance.now()
    const start=performance.now()
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    const end=performance.now();
    const time=end-start;
    expect(time).toBeLessThan(1000);
})

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


