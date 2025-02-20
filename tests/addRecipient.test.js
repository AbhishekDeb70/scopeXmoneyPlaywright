const { test, expect } = require('@playwright/test');
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const AddRecipientPage = require('../pages/AddRecipientPage');

test('Add Recipient Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const addRecipientPage = new AddRecipientPage(page);

    await homePage.goto();

    // Verify URL
    const pageURL = await homePage.getURL();
    console.log('Page URL::', pageURL);
    await expect(page).toHaveURL(process.env.BASE_URL);

    // Navigate to Login Page
    await homePage.clickLogin();

    // Fill Login Form
    await loginPage.fillLoginDetails(process.env.EMAIL, process.env.PASS);

    //Verify Login
    await expect(homePage.userName).toBeVisible();

    //navigate to Add Recipient Page
    await homePage.navigateToAddRecipient();

    //Fill Recipient Form
    const recipientName = faker.person.fullName();;
    const recipientNickName = faker.person.firstName();
    const recipientBankAccNo = process.env.ACCNO;
    const recipientIFSCCode = process.env.IFSC;
    await addRecipientPage.fillRecipientDetails(recipientName, recipientNickName, recipientBankAccNo, recipientIFSCCode);
    await page.screenshot({ path: 'screenshots/recipient.png' });

    //Verify Conf Pop Up and select confirm
    await expect(addRecipientPage.confirmPopUp).toBeVisible();
    await addRecipientPage.clickConfirm();

    //Verify success toast message
    await expect(addRecipientPage.successMessage).toBeVisible();
    await page.screenshot({ path: 'screenshots/successMsg.png' });

});