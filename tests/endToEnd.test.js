const { test, expect, request } = require('@playwright/test');
const LoginPage=require('../pages/login.page')
const EndToEndPage=require('../pages/endToEnd.page')
const {login}=require('../helpers')


test('End to End Testing',async({page})=>{
    const endToEndPage=new EndToEndPage(page);
    await login(page,'standard_user','secret_sauce');
    await endToEndPage.addToCart(page);
    await endToEndPage.clickOnCartBtn(page);
    await endToEndPage.assertCartPage(page);
    await endToEndPage.clickOnCheckout(page);
    await endToEndPage.assertCheckoutPage(page);
    await endToEndPage.fillCheckoutForm(page);
    await endToEndPage.assertCheckoutOverviewPage(page);
    await endToEndPage.assertCheckoutCompletePage(page);
})