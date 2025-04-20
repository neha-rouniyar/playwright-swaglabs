const { test, expect, request } = require('@playwright/test');

class EndToEndPage{

    constructor(page){
        this.page=page;
        this.addToCartBtn=page.locator('.btn_primary.btn_inventory')
        this.removeBtn=page.locator('.btn_secondary.btn_inventory');
        this.cartBtn=page.locator('#shopping_cart_container');
        this.checkoutBtn=page.locator('.btn_action.checkout_button');
        this.subheader=page.locator('.subheader');
        this.finishBtn=page.locator('.btn_action.cart_button');
        this.completeHeader=page.locator('.complete-header');
        this.firstName=page.locator('#first-name');
        this.lastName=page.locator('#last-name');
        this.postalCode=page.locator('#postal-code');
        this.continueBtn=page.locator('.btn_primary.cart_button');

        //social media locators
        this.twitter=page.locator('.social_twitter')
        this.facebook=page.locator('.social_facebook')
        this.linkedin=page.locator('.social_linkedin')

    }

    async assertSocialMediaLogo(){
        await(expect(this.twitter).toBeVisible());
        await(expect(this.facebook).toBeVisible());
        await(expect(this.linkedin).toBeVisible());
    }

    async addToCart(){
        await this.addToCartBtn.first().click();    
        await this.addToCartBtn.last().click();
    }
    async removeFromCart(){
        await this.removeBtn.first().click();
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
    async assertCheckoutOverviewPage() {
        await expect(this.subheader).toHaveText('Checkout: Overview');
    
        const prices = this.page.locator('.inventory_item_price');
        const allPrices = await prices.allTextContents();
        const itemPrices = allPrices.map(price => parseFloat(price.replace('$', '')));
        const expectedItemTotal = itemPrices.reduce((sum, price) => sum + price, 0);
    
        const itemTotalElement = this.page.locator('.summary_subtotal_label');
        const itemTotalText = await itemTotalElement.textContent();
        const displayedTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
    
        //tax calculation
        const taxElement = this.page.locator('.summary_tax_label');
        const taxText = await taxElement.textContent();
        const taxAmount = parseFloat(taxText.replace('Tax: $', ''));
    
        //total = subtotal + tax
        const totalWithTax = displayedTotal + taxAmount;
    
        const totalElement = this.page.locator('.summary_total_label');
        const totalText = await totalElement.textContent();
        const displayedTotalWithTax = parseFloat(totalText.replace('Total: $', ''));
    
        await expect(displayedTotal).toBeCloseTo(expectedItemTotal, 2);
        await expect(displayedTotalWithTax).toBeCloseTo(totalWithTax, 2);
    
        const finishBtn = this.page.locator('.btn_action.cart_button');
        await finishBtn.click();
    }
    
    async assertCheckoutCompletePage(){
        await(expect(this.subheader).toHaveText('Finish'));
        await(expect(this.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER'));
    }
}
module.exports=EndToEndPage;