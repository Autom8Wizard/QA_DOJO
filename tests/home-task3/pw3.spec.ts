import { test, expect } from '@playwright/test';
import {login, logout, navigateTo, navigateToAccountsMenu} from './LoginFlows'
import { searchAccountByContactDetails, filterDeviceByName, searchAccountById } from './AccountFiltering';

test('TC1. Login and logout as a FinanceUser', async ({ page }) => {
  navigateTo(page, 'https://ws-staging.keepit.com/console/home')

  await login(page, 'skn_BMIFinance@keepit.com', 'xZLMtr02AcE6')

  // check that user is logged
  await expect(page.getByTestId('status')).toHaveText('Signed as skn_BMIFinance@keepit.com');

  await logout(page)
});

test('TC2. Account search by contact details', async ({ page }) => {
  navigateTo(page, 'https://ws-staging.keepit.com/console/home')

  await login(page, 'skn_BMIFinance@keepit.com', 'xZLMtr02AcE6')
  await navigateToAccountsMenu(page)

  // check account search by contact details
  const searchRequest = 'sergio';
  await searchAccountByContactDetails(page, searchRequest)
  const texts = await page.getByTestId('search-results-row').allTextContents();
  texts.forEach(text => expect(text).toContain(searchRequest));
});

test('TC3. Account search by id', async ({ page }) => {
  navigateTo(page, 'https://ws-staging.keepit.com/console/home')

  await login(page, 'skn_BMIFinance@keepit.com', 'xZLMtr02AcE6')
  await navigateToAccountsMenu(page)

  // check account search by id
  const searchRequest = 'cv7g59-yl8vkd-uclyvz';
  await searchAccountById(page, searchRequest)
  const texts = await page.getByTestId('search-results-row').allTextContents();
  texts.forEach(text => expect(text).toContain(searchRequest));
});

test('TC4. Device filtering by name', async ({ page }) => {
  navigateTo(page, 'https://ws-staging.keepit.com/console/home')

  await login(page, 'skn_BMIFinance@keepit.com', 'xZLMtr02AcE6')
  await navigateToAccountsMenu(page)

  // check device filtering
  const searchRequest = 'SupportData';
  await filterDeviceByName(page, searchRequest)
  await expect(page.locator('#element-0-3')).toContainText('SupportData');
  const texts = await page.locator('#element-0-3').allTextContents();
  texts.forEach(text => expect(text).toContain(searchRequest));
});

test('TC5. Navigate to sub-account', async ({ page }) => {
  navigateTo(page, 'https://ws-staging.keepit.com/console/home')

  await login(page, 'skn_BMIFinance@keepit.com', 'xZLMtr02AcE6')
  await navigateToAccountsMenu(page)

  // open sub-account
  const accountName = 'sagd3k-7luq8s-y6lrfy';
  await page.getByText(accountName).click();
  await expect(page.locator('#accountDetails')).toContainText(`Details of ${accountName}`);
});


