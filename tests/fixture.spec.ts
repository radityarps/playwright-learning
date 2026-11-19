import { test, expect } from "../fixtures/todo.fixture";

import { todoCases } from "../test-data/todos";

for (const { title } of todoCases) {
  test(`should create todo: ${title}`, async ({ todoPage }) => {
    await todoPage.addTodo(title);

    await expect(todoPage.todoItems).toHaveText([title]);

    await expect(todoPage.getTodo(title).checkbox).not.toBeChecked();
  });
}

test("should complete a todo using fixture", async ({ todoPage }) => {
  // TODO 1: Assert initial list is empty.
  await expect(todoPage.todoItems).toHaveCount(0);
  // TODO 2: Add "Learn Automation".
  await todoPage.addTodo("Learn Automation");
  // TODO 3: Get TodoItem using POM.
  const todo = todoPage.getTodo("Learn Automation");
  // TODO 4: Complete the todo.
  await todo.complete();
  // TODO 5: Assert checkbox is checked.
  await expect(todo.checkbox).toBeChecked();
  // TODO 6: Assert the list contains exactly one item.
  await expect(todoPage.todoItems).toHaveCount(1);
});
