import { Task } from "../task";

describe("Task", () => {
  let task: Task;

  // Before each test, we create a new Task instance to ensure each test is isolated
  beforeEach(() => {
    task = new Task(1, "Test task", "Test category");
  });

  // Test case to verify that a new task is created with the correct properties
  test("should create a new task", () => {
    expect(task).toBeDefined();
    expect(task.id).toBe(1);
    expect(task.title).toBe("Test task");
    expect(task.category).toBe("Test category");
    expect(task.completed).toBe(false);
    expect(task.deadline).toBeNull();
  });

  // Test case to verify that the task's title and category can be updated
  test("should update the task title and category", () => {
    task.title = "Updated task";
    task.category = "Updated category";
    expect(task.title).toBe("Updated task");
    expect(task.category).toBe("Updated category");
  });

  // Test case to verify that the task can be marked as completed
  test("should mark the task as completed", () => {
    task.completed = true;
    expect(task.completed).toBe(true);
  });

  // Test case to verify that a deadline can be set for the task
  test("should set a deadline for the task", () => {
    const deadline = new Date("2024-09-15");
    task.deadline = deadline;
    expect(task.deadline).toBe(deadline);
  });

  // Test case to verify that a task can be deleted from a list of tasks
  test("should delete the task", () => {
    const tasks: Task[] = [new Task(1, "Test task", "Test category")];
    const index = tasks.findIndex((task) => task.id === 1);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    expect(tasks.length).toBe(0);
  });
});
