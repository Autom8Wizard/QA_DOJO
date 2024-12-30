import { test, expect, Page } from '@playwright/test';

export async function searchAccountByContactDetails(page:Page, searchRequest: string){
  await page.getByTestId('accounts-page-search').click();
  await page.getByTestId('form').getByTestId('input-input').fill(searchRequest);
  await page.getByTestId('form').getByTestId('input-input').press('Enter');
}

export async function searchAccountById(page:Page, searchRequest: string){
  await page.getByTestId('accounts-page-search').click();
  await page.getByTestId('form').getByTestId('input-input').fill(searchRequest);
  await page.getByTestId('form').getByTestId('input-input').press('Enter');
}

export async function filterDeviceByName(page:Page, searchRequest: string){
  await page.locator('#account-information-devices-search-search-field-selector').selectOption('name');
  await page.getByTestId('search-input-field').click();
  await page.getByTestId('search-input-field').fill(searchRequest);
  await page.getByTestId('search-input-field').press('Enter');
}

