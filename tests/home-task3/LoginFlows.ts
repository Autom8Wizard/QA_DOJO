import { test, expect, Page } from '@playwright/test';

export async function navigateTo(page:Page, url: string){
    await page.goto(url);
}

export async function navigateToAccountsMenu(page:Page){
  await expect(page.getByTestId('home-page-accounts')).toContainText('Accounts');
  await page.getByTestId('home-page-accounts').locator('path').click();
}

export async function login(page:Page, userName:string, password: string){
  await page.getByLabel('Name').fill(userName);
  await page.getByLabel('Password').fill(password);
  const signInButton = page.getByRole('button', { name: 'Sign in' });
  await expect(signInButton).toBeVisible()
  await signInButton.click();
}

export async function logout(page:Page){
    await page.locator("//div[contains(@class, 'signout-button')]").click();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
    await expect(page.getByTestId('status')).toBeHidden();
  }