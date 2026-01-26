const { test, expect } = require('@playwright/test');

test.describe('Authentication Tests', () => {
  test('Sign Up Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Click on the 'Sign up' link
    await page.click('a:has-text("Sign up")');

    // Enter valid details and submit
    await page.fill('#sign-username', 'new_user');
    await page.fill('#sign-password', 'new_password');
    await page.click('button:has-text("Sign up")');

    // Verify successful registration
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Sign up successful.');
      await dialog.accept();
    });

    // Enter duplicate details and submit
    await page.click('a:has-text("Sign up")');
    await page.fill('#sign-username', 'new_user');
    await page.fill('#sign-password', 'new_password');
    await page.click('button:has-text("Sign up")');

    // Verify error message
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('This user already exist.');
      await dialog.accept();
    });
  });
});