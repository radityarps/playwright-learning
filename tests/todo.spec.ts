import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test("user can create a todo", async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo("Review API");

  await expect(todoPage.todoItems).toHaveText(["Review API"]);
});
