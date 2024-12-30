import { test, expect } from '@playwright/test';

test('Navigation between different links', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('banner')).toContainText('Get started');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  page.getByRole('link', { name: 'Get started' }).click;
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('setup');
  await expect(page.getByPlaceholder('Search docs')).toHaveValue("setup");
  await page.getByRole('link', { name: 'Setup​ Global setup and teardown', exact: true }).click();
  await page.getByRole('link', { name: 'authentication', exact: true }).click();
});

test('Open video How to generate test?', async ({ page }) => {
  await page.goto('https://playwright.dev/');

   const learnVideosLink = page.getByRole('link', { name: 'Learn Videos' });
   await expect(learnVideosLink).toBeVisible();
   await expect(learnVideosLink).toContainText('Learn Videos');
   await learnVideosLink.click();
 
   const featureVideosLink = page.locator('[id="__docusaurus_skipToContent_fallback"]').getByRole('link', { name: 'Feature Videos' });
   await expect(featureVideosLink).toBeVisible();
   await expect(featureVideosLink).toHaveText('Feature Videos');
   await featureVideosLink.click();
 
   await expect(page.getByText('Codegen')).toBeVisible();
   await page.getByText('Codegen').click();
   await expect(page.getByLabel('Watch Codegen')).toBeVisible();
   await page.getByLabel('Watch Codegen').click();
});

test('Visibility of next community ambassador', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await expect(page.locator('#github')).toContainText('GitHub');
  await page.getByRole('link', { name: 'Next Ambassadors »' }).click();
  await expect(page.locator('section')).toContainText('Are you the next Ambassador?');
});

test('Navigation to the Playwright Github from main page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Star microsoft/playwright on').click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('article')).toContainText('🎭 Playwright');
  await page1.getByRole('article').locator('div').filter({ hasText: '# Run from your project\'s' }).getByLabel('Copy').click();
});

test('JUNIT presence in Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Trace Viewer.' }).click();
  await page.getByRole('link', { name: 'JUnit (experimental)' }).click();
  await expect(page.getByLabel('Breadcrumbs').getByRole('list')).toContainText('JUnit (experimental)');
});