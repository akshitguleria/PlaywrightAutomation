
import { test, expect } from '@playwright/test';

test('LDB website test', async ({ page, context }) => {

  // Step 1: Open website
  await page.goto('https://www.ldb.co.in/ldb/containersearch');

  // Step 2: Close popup if it appears
  const closeButton = page.getByRole('button', {
    name: 'Close'
  });

  if (await closeButton.isVisible().catch(() => false)) {
    await closeButton.click();
  }

  // Step 3: Select Hindi language
  await page.getByRole('combobox').selectOption('hin');

  // Step 4: Click Contact Us
  await page.getByRole('button', {
    name: 'संपर्क करें'
  }).click();

  // Step 5: Open news link in new tab
  const page1Promise = context.waitForEvent('page');

  await page.getByRole('link', {
    name: /31 December 2025.*NICDC/
  }).click();

  const page1 = await page1Promise;

  await page1.waitForLoadState();

  // Step 6: Open video link in new tab
  const page2Promise = context.waitForEvent('page');

  await page.getByRole('link', {
    name: /Tackle the Logistics Challenges/
  }).click();

  const page2 = await page2Promise;

  await page2.waitForLoadState();

  // Step 7: Play video
  const videoFrame = page2.frameLocator('iframe');

  const playButton = videoFrame.getByRole('button', {
    name: 'Play'
  });

  if (await playButton.isVisible().catch(() => false)) {
    await playButton.click();
  }

});
