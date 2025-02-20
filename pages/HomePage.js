require('dotenv').config();

class HomePage {
    constructor(page) {
        this.page = page;
        this.baseURL = process.env.BASE_URL;
        this.registerLink = page.locator("//a[text()='Register']");
        this.loginButton = page.locator("[href='/Login']");
        this.userName = page.locator("//span[text()='Abhi']");
        this.recipientsButton = page.locator("//span[text()='Recipients']");
        this.addRecipient = page.locator("[href='/Add-Recipient']");
        this.avatar = page.locator("[class='mr-2']");
        this.logoutButton = page.locator("//a[text()='Log out']");
    }

    async goto() {
        await this.page.goto(this.baseURL);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getURL() {
        return await this.page.url();
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async navigateToAddRecipient(){
        await this.recipientsButton.click();
        await this.addRecipient.click();
    }

    async openAvatarMenu(){
        await this.avatar.click();
    }

    async clickLogout(){
        await this.logoutButton.click();
    }
}

module.exports = HomePage;
