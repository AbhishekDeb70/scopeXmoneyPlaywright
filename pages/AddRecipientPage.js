class AddRecipientPage {
    constructor(page) {
        this.page = page;
        this.recipientNameField = page.locator("[name='recipient_name']");
        this.recipientNickNameField = page.locator("[name='recipient_nick_name']");
        this.recipientBankAccNoField = page.locator("[name='bank_account_number']");
        this.recipientIFSCCodeField = page.locator("[name='ifsc_code']");
        this.submitButton = page.locator("[type='submit']");
        this.confirmPopUp = page.locator("//h2[text()='Confirm recipient details']");
        this.confirmButton = page.locator("//button[text()='Confirm']");
        this.successMessage = page.locator("//div[text()='Recipient added successfully!']");
    }

    async fillRecipientDetails(recipientName, recipientNickName, recipientBankAccNo, recipientIFSCCode){
        await this.recipientNameField.fill(recipientName);
        await this.recipientNickNameField.fill(recipientNickName);
        await this.recipientBankAccNoField.fill(recipientBankAccNo);
        await this.recipientIFSCCodeField.fill(recipientIFSCCode);
        await this.submitButton.click();
    }

    async clickConfirm(){
        await this.confirmButton.click();
    }
}

module.exports = AddRecipientPage;