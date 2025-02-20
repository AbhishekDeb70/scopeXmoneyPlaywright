class RegisterPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator("[name='name']");
        this.usernameInput = page.locator("[name='username']");
        this.submitButton = page.locator("[type='submit']");
        this.registeredUser = (name) => page.locator(`//span[text()='${name}']`);
    }

    async fillRegistrationForm(name, username) {
        await this.nameInput.fill(name);
        await this.usernameInput.fill(username);
        await this.submitButton.click();
    }

    async isUserRegistered(name) {
        return await this.registeredUser(name).isVisible();
    }
}

module.exports = RegisterPage;
