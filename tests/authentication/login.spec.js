const { test, expect } = require('@playwright/test');

test.describe('Authentication Tests', () => {
  test('Login Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Click on the 'Log in' link
    await page.click('a:has-text("Log in")');

    // Wait for the login modal to appear
    const loginModal = page.locator('#logInModal');
    await expect(loginModal).toBeVisible({ timeout: 5000 });

    // Enter valid credentials and submit
    await page.fill('#loginusername', 'ashishtaralkar@gmail.com');
    await page.fill('#loginpassword', 'Ashish');
    await page.click('button:has-text("Log in")');

    // Verify successful login
    const welcomeMessage = page.locator('a:has-text("Welcome")');
    await welcomeMessage.waitFor({ state: 'visible', timeout: 10000 });
    await expect(welcomeMessage).toBeVisible();

    // Enter invalid credentials and submit
    await page.click('a:has-text("Log out")');
    await page.click('a:has-text("Log in")');

    // Wait for the login modal to reappear
    await expect(loginModal).toBeVisible({ timeout: 5000 });

    await page.fill('#loginusername', 'invalid_user');
    await page.fill('#loginpassword', 'invalid_password');
    await page.click('button:has-text("Log in")');

    // Verify login failure by checking if the login modal is still visible
    await expect(loginModal).toBeVisible({ timeout: 5000 });
  });
});