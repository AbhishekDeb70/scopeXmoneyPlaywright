require('dotenv').config();

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locator("[name='username']");
        this.passwordField = page.locator("[name='password']");
        this.logInButton = page.locator("//button[text()='Log in']");
    }

    async fillLoginDetails(email, password){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.logInButton.click();
    }
}

module.exports = LoginPage;