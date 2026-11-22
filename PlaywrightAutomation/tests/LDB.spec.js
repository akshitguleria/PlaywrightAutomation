
import { test, expect } from '@playwright/test';

test.describe('LDB Container Search', () => {
  test('Verify container search page', async ({ page }) => {
    await page.goto('https://www.ldb.co.in/ldb/containersearch');

    await page.getByTitle('View full trail of single')
      .getByRole('paragraph')
      .click();

    await page.getByTitle('View latest trail of each')
      .locator('#Capa_1')
      .click();
  });
});
