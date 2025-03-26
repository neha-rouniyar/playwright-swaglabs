const { test, expect, request } = require('@playwright/test');

class EndToEndPage{

    constructor(page){
        this.page=page;
        this.addToCartBtn=page.locator('.btn_primary.btn_inventory')
        this.cartBtn=page.locator('#shopping_cart_container');
        this.checkoutBtn=page.locator('.btn_action.checkout_button');
        this.subheader=page.locator('.subheader');
        this.finishBtn=page.locator('.btn_action.cart_button');
        this.completeHeader=page.locator('.complete-header');
        this.firstName=page.locator('#first-name');
        this.lastName=page.locator('#last-name');
        this.postalCode=page.locator('#postal-code');
        this.continueBtn=page.locator('.btn_primary.cart_button');
    }

    async addToCart(){
        await this.addToCartBtn.first().click();    
        await this.addToCartBtn.last().click();
    }
    async clickOnCartBtn(){
        await this.cartBtn.click();
    }
    async assertCartPage(){
        await(expect(this.subheader).toHaveText('Your Cart'));
    }
    async clickOnCheckout(){
        await this.checkoutBtn.click();
    }
    async assertCheckoutPage(){
        await(expect(this.subheader).toHaveText('Checkout: Your Information'));
    }
    async fillCheckoutForm(firstName,lastName,postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueBtn.click();
    }
    async assertCheckoutOverviewPage(){
        await(expect(this.subheader).toHaveText('Checkout: Overview'));
        const finishBtn= this.page.locator('.btn_action.cart_button')
        await finishBtn.click();
    }
    async assertCheckoutCompletePage(){
        await(expect(this.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER'));
    }
}
module.exports=EndToEndPage;