import { type Page, type Locator } from "@playwright/test";

import { TodoItem } from "../components/TodoItem";

export class TodoPage {
  readonly todoItems: Locator;
  private readonly todoInput: Locator;

  constructor(private readonly page: Page) {
    this.todoInput = page.getByPlaceholder("What needs to be done?");

    this.todoItems = page.locator(".todo-list li");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://demo.playwright.dev/todomvc/");
  }

  async addTodo(title: string): Promise<void> {
    await this.todoInput.fill(title);
    await this.todoInput.press("Enter");
  }

  getTodoExact(title: string): Locator {
    return this.todoItems.filter({
      has: this.page.getByText(title, {
        exact: true,
      }),
    });
  }

  getTodo(title: string): TodoItem {
    return new TodoItem(this.getTodoExact(title));
  }
}
