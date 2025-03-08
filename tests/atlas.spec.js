import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=en_us');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Log in').click();
  await expect(page.getByText('Welcome Back')).toBeVisible();
  await page.locator('#GEN_BTN_ACCOUNT_LOGIN_INDEX').getByRole('img').click();
  await page.getByText('Log in').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('lelleh7@gmail.com');
});