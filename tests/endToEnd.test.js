const { test, expect, request } = require('@playwright/test');
const LoginPage=require('../pages/login.page')
const {verifyErrorMessage,login}=require('../helpers')

test('End to End Testing',async({page})=>{
    await login(page,'standard_user','secret_sauce');
    const addToCartBtn = await page.locator('.btn_primary.btn_inventory');  
    await addToCartBtn.first().click();
    await addToCartBtn.last().click();
    // await addToCartBtn2.click();

    const cartBtn=await page.locator('#shopping_cart_container');
    await cartBtn.click();

    expect(await page.locator('.subheader').textContent()).toBe('Your Cart');

    const checkoutBtn=await page.locator('.btn_action.checkout_button');
    await checkoutBtn.click();

    expect(await page.locator('.subheader').textContent()).toBe('Checkout: Your Information')


    const firstName=await page.locator('#first-name');
    const lastName=await page.locator('#last-name');
    const postalCode=await page.locator('#postal-code');
    const continueBtn= await page.locator('.btn_primary.cart_button')

    await firstName.fill('Nehu');
    await lastName.fill('Ro...');
    await postalCode.fill('4567890');
    await continueBtn.click();

    expect(await page.locator('.subheader').textContent()).toBe('Checkout: Overview')
    const finishBtn= await page.locator('.btn_action.cart_button')
    await finishBtn.click();

    expect(await page.locator('.complete-header').textContent()).toBe('THANK YOU FOR YOUR ORDER')

})