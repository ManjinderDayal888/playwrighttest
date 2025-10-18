import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/'); // uses baseURL
    // Wait for the hero cards to appear
    await expect(this.page.getByRole('heading', { name: 'Elements' })).toBeVisible();
  }
}
