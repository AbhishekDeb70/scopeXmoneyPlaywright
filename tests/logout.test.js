const { test, expect } = require('@playwright/test');
require('dotenv').config();
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test('Add Recipient Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goto();

     // Verify URL
      const pageURL = await homePage.getURL();
      console.log('Page URL::', pageURL);
      await expect(page).toHaveURL(process.env.BASE_URL);

      // Navigate to Login Page
      await homePage.clickLogin();

      // Fill Login Form
      await loginPage.fillLoginDetails(process.env.EMAIL, process.env.PASS);
      await page.screenshot({ path: 'screenshots/after_login.png' });

      //Verify Login
      await expect(homePage.userName).toBeVisible();

      //Logout
      await homePage.openAvatarMenu();
      await homePage.clickLogout();
      await page.screenshot({ path: 'screenshots/logout.png' });

      //Verify Logout
      await expect(homePage.loginButton).toBeVisible();

});