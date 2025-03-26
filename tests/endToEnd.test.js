const { test, expect, request } = require('@playwright/test');
const EndToEndPage=require('../pages/endToEnd.page')
const {login}=require('../helpers')


test('End to End Testing',async({page})=>{
    const endToEndPage=new EndToEndPage(page);
    await login(page,'standard_user','secret_sauce');

    await endToEndPage.addToCart();
    await endToEndPage.clickOnCartBtn();
    await endToEndPage.assertCartPage();

    await endToEndPage.clickOnCheckout();
    await endToEndPage.assertCheckoutPage();
    await endToEndPage.fillCheckoutForm('Neha','Ro...','89798');

    await endToEndPage.assertCheckoutOverviewPage();
    await endToEndPage.assertCheckoutCompletePage();
})