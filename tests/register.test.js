const { test, expect } = require('@playwright/test');
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');

test('User Registration Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    await homePage.goto();

    // Verify title and URL
    const pageTitle = await homePage.getTitle();
    console.log('Page Title is::', pageTitle);
    await expect(page).toHaveTitle('ScopeX: Zero-Fee Money Transfers | Best Rate For Sending Money To India');

    const pageURL = await homePage.getURL();
    console.log('Page URL::', pageURL);
    await expect(page).toHaveURL(process.env.BASE_URL);

    // Navigate to Register Page
    await homePage.clickRegister();

    // Fill Registration Form
    const testName = faker.person.firstName();
    const testUsername = faker.internet.email();
    console.log(`Using Random Test Data: Name=${testName}, Email=${testUsername}`);
    await registerPage.fillRegistrationForm(testName, testUsername);
    await page.screenshot({ path: 'screenshots/registration.png' });

    // Verify Registration
    await expect(registerPage.registeredUser(testName)).toBeVisible();
});
