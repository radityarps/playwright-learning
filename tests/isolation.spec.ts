import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test.describe("Todo isolation tests", () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Navigate to TodoMVC using TodoPage
    await new TodoPage(page).goto();
  });

  test("should add multiple todos", async ({ page }) => {
    const todoPage = new TodoPage(page);

    // TODO 1: Add "Learn Playwright"
    // TODO 2: Add "Learn POM"
    await todoPage.addTodo("Learn Playwright");
    await todoPage.addTodo("Learn POM");

    // TODO 3: Assert exactly 2 todos exist
    // TODO 4: Assert their text and order
    await expect(todoPage.todoItems).toHaveCount(2);
    await expect(todoPage.todoItems).toHaveText([
      "Learn Playwright",
      "Learn POM",
    ]);
  });

  test("should complete an independent todo", async ({ page }) => {
    const todoPage = new TodoPage(page);

    // TODO 1: Assert the list is initially empty
    await expect(todoPage.todoItems).toHaveCount(0);
    // TODO 2: Add "Learn Automation"
    await todoPage.addTodo("Learn Automation");
    // TODO 3: Locate the specific todo
    const learnAutomationTodo = todoPage.getTodoExact("Learn Automation");
    // TODO 4: Check its checkbox
    const getCheckbox = learnAutomationTodo.getByRole("checkbox");
    await getCheckbox.check();
    // TODO 5: Assert it is checked
    await expect(getCheckbox).toBeChecked();
    // TODO 6: Assert exactly 1 todo exists
    await expect(todoPage.todoItems).toHaveCount(1);
  });
});
