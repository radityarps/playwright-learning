import { test as base, expect } from "@playwright/test";

import { TodoPage } from "../pages/TodoPage";

type TodoFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<TodoFixtures>({
  todoPage: async ({ page }, use) => {
    // Setup
    const todoPage = new TodoPage(page);
    await todoPage.goto();

    // Provide fixture to the test
    await use(todoPage);

    // Teardown can be added here if needed.
  },
});

export { expect };
