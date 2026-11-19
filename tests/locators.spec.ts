import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test("complete only the selected todo", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  // Arrange: Create two todos
  await todoPage.addTodo("Learn Playwright");
  await todoPage.addTodo("Learn POM");

  // Assert: Verify both todos
  await expect(todoPage.todoItems).toHaveText([
    "Learn Playwright",
    "Learn POM",
  ]);

  // Act: Complete only Learn Playwright
  const playwrightTodo = todoPage.getTodoExact("Learn Playwright");
  const pomTodo = todoPage.getTodoExact("Learn POM");

  await playwrightTodo.getByRole("checkbox").check();

  // Assert: Verify both checkbox states
  await expect(playwrightTodo.getByRole("checkbox")).toBeChecked();

  await expect(pomTodo.getByRole("checkbox")).not.toBeChecked();
});
