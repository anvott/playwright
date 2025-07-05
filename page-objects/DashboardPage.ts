import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeMessage = page.locator("//span[@data-test='title']");
  }

  async expectWelcome(text: string) {
    await expect(this.welcomeMessage).toHaveText(text);
  }
}
