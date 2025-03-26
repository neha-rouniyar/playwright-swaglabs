class LoginPage{
    constructor(page){
        this.page=page;
        this.usernameField='#user-name'
        this.passwordField='#password'
        this.buttonField='#login-button'
        this.errorMessage='[data-test="error"]'
    }

    // async open(){
    //     await this.page.goto('https://www.saucedemo.com/v1/')
    // }
    
    // async login(username,password){
    //     await this.page.fill(this.usernameField, username)
    //     await this.page.fill(this.passwordField, password)
    //     await this.page.click(this.buttonField)
    // }

    // async getErrorMessage(){
    //     return await this.page.locator(this.errorMessage).textContent();
    // }
}
module.exports=LoginPage;
