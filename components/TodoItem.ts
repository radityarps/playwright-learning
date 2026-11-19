import { type Locator } from "@playwright/test";

export class TodoItem {
  constructor(private readonly root: Locator) {}

  get checkbox(): Locator {
    return this.root.getByRole("checkbox");
  }

  async complete(): Promise<void> {
    await this.checkbox.check();
  }

  async reopen(): Promise<void> {
    // TODO:
    // Change a completed todo back to active.
    // Hint: Playwright Locator has an
    // opposite method to .check().
    await this.checkbox.uncheck();
  }
}
