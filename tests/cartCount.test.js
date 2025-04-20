const { test, expect } = require("playwright/test");
const EndToEndPage=require('../pages/endToEnd.page')
const {login}=require('../helpers')



test('Test Cart Count when increasing/decreasing the products',async({page})=>{
    const endToEndPage=new EndToEndPage(page);
    await login(page,'standard_user','secret_sauce');

    await endToEndPage.addToCart();

    const cartBadge=page.locator('.shopping_cart_badge')
    await expect(cartBadge).toHaveText('2')

    await endToEndPage.removeFromCart();
    await expect(cartBadge).toHaveText('1')
})


