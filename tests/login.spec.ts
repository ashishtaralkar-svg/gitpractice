import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobject/login-page';

test.describe('Login Tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Positive Login Test', async ({ page }) => {
    await loginPage.login('student', 'Password123');

    // Verify successful login
    await expect(page).toHaveURL(/.*logged-in-successfully/);
    const logoutLink = page.locator('a:has-text("Log out")'); // Updated selector for the Log out link
    await expect(logoutLink).toBeVisible();
  });

  test.skip('Negative Login Test - Invalid Username', async ({ page }) => {
    await loginPage.login('incorrectUser', 'Password123');

    // Verify error message
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your username is invalid!');
  });

  test.skip('Negative Login Test - Invalid Password', async ({ page }) => {
    await loginPage.login('student', 'incorrectPassword');

    // Verify error message
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');
  });

});