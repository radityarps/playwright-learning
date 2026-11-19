import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

// test("complete selected todo using POM", async ({ page }) => {
//   // Arrange
//   const todoPage = new TodoPage(page);
//   await todoPage.goto();
//
//   await todoPage.addTodo("Learn Playwright");
//   await todoPage.addTodo("Learn POM");
//
//   // Act
//   const playwrightTodo = todoPage.getTodo("Learn Playwright");
//   const pomTodo = todoPage.getTodo("Learn POM");
//
//   await playwrightTodo.complete();
//
//   // Assert
//   await expect(playwrightTodo.checkbox).toBeChecked();
//   await expect(pomTodo.checkbox).not.toBeChecked();
//
//   await expect(todoPage.todoItems).toHaveText([
//     "Learn Playwright",
//     "Learn POM",
//   ]);
// });

test("reopen a completed todo", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  // TODO 1: Add two todos.
  await todoPage.addTodo("Learn Playwright");
  await todoPage.addTodo("Learn POM");

  // TODO 2: Obtain both TodoItem objects.
  const playwrightTodo = todoPage.getTodo("Learn Playwright");
  const pomTodo = todoPage.getTodo("Learn POM");

  // TODO 3: Complete "Learn Playwright".
  await playwrightTodo.complete();

  // TODO 4: Assert that it is checked.
  await expect(playwrightTodo.checkbox).toBeChecked();
  // TODO 5: Reopen "Learn Playwright".
  await playwrightTodo.reopen();

  // TODO 6: Assert both todos are unchecked.
  await expect(playwrightTodo.checkbox).not.toBeChecked();
  await expect(pomTodo.checkbox).not.toBeChecked();

  // TODO 7: Assert the total remains 2.
  await expect(todoPage.todoItems).toHaveCount(2);
});
