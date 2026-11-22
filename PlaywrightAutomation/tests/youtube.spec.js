
import { test, expect } from '@playwright/test';

test.describe('Amazon Search', () => {
  test('Search product on Amazon', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    await page.getByRole('button', { name: 'Dismiss' }).click();

    await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  });
});
