import { test, expect } from "../fixtures/todo.fixture";

test("debug an intentional assertion failure", async ({ todoPage }) => {
  // Arrange & Act
  await todoPage.addTodo("Learn Playwright");

  // Intentional wrong expectation
  await expect(todoPage.todoItems).toHaveText(["Learn Playwright"], {
    timeout: 2000,
  });
});
