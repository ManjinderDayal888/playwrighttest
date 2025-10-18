import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.ts';
import { LeftNav } from '../pages/leftNav.ts';
import { CheckBoxPage } from '../pages/elements/checkBoxPage.ts';

test.describe('DemoQA Smoke', () => {
  test('home opens and Elements menu is reachable', async ({ page }) => {
    const home = new HomePage(page);
    const nav = new LeftNav(page);
    const checkBoxPage = new CheckBoxPage(page);


    await home.open();
    await nav.openSectionCard('Elements'); // go to Elements landing
    await expect(page.getByText('Elements')).toBeVisible();
    await nav.clickMenuItem('Check Box'); // go to Check Box page
    await expect(page.getByRole('heading', { name: 'Check Box' })).toBeVisible();
    await checkBoxPage.clickExpandAll();        
    await expect(page.getByText('Desktop')).toBeVisible();
    await checkBoxPage.clickCollapseAll();
     await expect(page.getByText('Desktop')).not.toBeVisible();

  });
});
