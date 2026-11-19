import { test, expect } from "../../fixtures/todo.fixture";
import { shipmentChecklistCases } from "../../test-data/shipment-checklists";

for (const scenario of shipmentChecklistCases) {
  test(`UI: ${scenario.shipmentRef} checklist`, async ({ todoPage }) => {
    // Arrange
    for (const task of scenario.tasks) {
      await todoPage.addTodo(task);
    }

    // Verify all tasks and their order
    await expect(todoPage.todoItems).toHaveText([...scenario.tasks]);

    // Act
    const targetTodo = todoPage.getTodo(scenario.completeTask);

    await targetTodo.complete();

    // Assert completed task
    await expect(targetTodo.checkbox).toBeChecked();

    // Assert all other tasks remain active
    for (const task of scenario.tasks) {
      if (task === scenario.completeTask) {
        continue;
      }

      const otherTodo = todoPage.getTodo(task);

      await expect(otherTodo.checkbox).not.toBeChecked();
    }

    // Verify no task was added or removed
    await expect(todoPage.todoItems).toHaveText([...scenario.tasks]);
  });
}

test("UI: checklist starts empty", async ({ todoPage }) => {
  await expect(todoPage.todoItems).toHaveCount(0);
});
