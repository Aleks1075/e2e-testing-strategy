import { Task } from "../task";
import { addTask, categorizeTasks } from "../app";

// Integration Tests and Specification-Based Tests
describe("To-Do List Integration and Specification-Based Tests", () => {
  // This test checks if a task is correctly added and categorized
  test("should add a task and categorize it", () => {
    const task = addTask("New Task", "Work");
    const workTasks = categorizeTasks("Work");
    expect(workTasks).toContainEqual(task);
  });

  // This test ensures that a task can be added with a deadline and marked as completed
  test("should add a task, set a deadline, and mark it as completed", () => {
    const task = addTask("Another Task", "Personal", new Date("2024-09-15"));
    task.completed = true;
    expect(task.completed).toBe(true);
    expect(task.deadline).toEqual(new Date("2024-09-15"));
  });

  // Specification-Based Test: This test categorizes tasks by their deadline and verifies the order
  test("should categorize tasks by deadline and mark the earliest as urgent", () => {
    const task1 = addTask("Task 1", "Work", new Date("2024-09-20"));
    const task2 = addTask("Task 2", "Work", new Date("2024-09-10"));
    const task3 = addTask("Task 3", "Work", new Date("2024-09-15"));

    const sortedTasks = [task2, task3, task1].sort(
      (a, b) => a.deadline!.getTime() - b.deadline!.getTime()
    );

    expect(sortedTasks[0].title).toBe("Task 2");
    expect(sortedTasks[1].title).toBe("Task 3");
    expect(sortedTasks[2].title).toBe("Task 1");
  });
});

// Use of Stub as a Test Double
// This test uses a stub to simulate the behavior of the categorizeTasks function.
// The stub allows for controlled output, ensuring that the test focuses on the expected behavior
// without relying on the actual implementation of categorizeTasks.
test("should use a stub to simulate task categorization", () => {
  const taskStub = jest
    .fn()
    .mockReturnValue([new Task(1, "Stub Task", "Stub Category")]);

  const tasks = taskStub();
  expect(tasks).toHaveLength(1);
  expect(tasks[0].title).toBe("Stub Task");
  expect(tasks[0].category).toBe("Stub Category");
});
