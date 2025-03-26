const { test, expect, request } = require('@playwright/test');

class EndToEndPage{

    async addToCart(page){
        const addToCartBtn = await page.locator('.btn_primary.btn_inventory');  
        await addToCartBtn.first().click();
        await addToCartBtn.last().click();
    }
    async clickOnCartBtn(page){
        const cartBtn=await page.locator('#shopping_cart_container');
        await cartBtn.click();
    }
    async assertCartPage(page){
        expect(await page.locator('.subheader').textContent()).toBe('Your Cart');
    }
    async clickOnCheckout(page){
        const checkoutBtn=await page.locator('.btn_action.checkout_button');
        await checkoutBtn.click();
    }
    async assertCheckoutPage(page){
        expect(await page.locator('.subheader').textContent()).toBe('Checkout: Your Information')
    }
    async fillCheckoutForm(page){
        const firstName=await page.locator('#first-name');
        const lastName=await page.locator('#last-name');
        const postalCode=await page.locator('#postal-code');
        const continueBtn= await page.locator('.btn_primary.cart_button')
        
        await firstName.fill('Nehu');
        await lastName.fill('Ro...');
        await postalCode.fill('4567890');
        await continueBtn.click();
    }
    async assertCheckoutOverviewPage(page){
        expect(await page.locator('.subheader').textContent()).toBe('Checkout: Overview')
        const finishBtn= await page.locator('.btn_action.cart_button')
        await finishBtn.click();
    }
    async assertCheckoutCompletePage(page){
        expect(await page.locator('.complete-header').textContent()).toBe('THANK YOU FOR YOUR ORDER');

    }
}
module.exports=EndToEndPage;