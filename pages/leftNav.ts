import { Page, Locator } from '@playwright/test';

export class LeftNav {
  readonly page: Page;
  readonly tree: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tree = page.locator('.left-pannel .element-list.collapse');
  }

  async openSectionCard(cardName: string) {
    // Click a home card such as "Elements", "Alerts, Frame & Windows", "Interactions"
    await this.page.getByRole('heading', { name: cardName, exact: true }).click();
  }

  async clickMenuItem(itemText: string) {
    // Click items like "Check Box", "Radio Button", "Upload and Download", "Droppable"
    await this.page.getByRole('listitem').filter({ hasText: itemText }).click();
  }
}
