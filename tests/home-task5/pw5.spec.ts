import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
  await page.locator("//a[@href='/login']").click();

  await page.locator("//input[@placeholder='Email']").fill('kononsergiy19@gmail.com');
  await page.locator("//input[@placeholder='Password']").fill('18Konon');
  await page.locator("//form//button[contains(text(), 'Sign in')]").click();
  await page.locator("//a[@href='/editor']").click();
  await page.locator("//input[@placeholder='Article Title']").fill('How to become super test Automation');
  await page.locator('//input[@placeholder="What\'s this article about?"]').fill('What actions should you do to become super test Automation');
  await page.locator("//textarea[@placeholder='Write your article (in markdown)']").fill('Continious improvement, my dears!');
  await page.locator("//input[@placeholder='Enter tags']").fill('success');
  await page.locator("//button[@data-qa-id='editor-publish' and contains(text(), 'Publish Article')]").click();
  await expect(page.locator("//h1[@data-qa-id='article-title']")).toContainText('How to become super test Automation');
  await expect(page.locator("//div[@data-qa-id='article-body']")).toContainText('Continious improvement, my dears!');
});

