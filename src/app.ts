import { Task } from "./task";

let tasks: Task[] = [];
let currentId = 1;

function addTask(
  title: string,
  category: string,
  deadline: Date | null = null
): Task {
  const task = new Task(currentId++, title, category, deadline);
  tasks.push(task);
  return task;
}

function updateTask(
  id: number,
  newTitle: string,
  newCategory: string
): boolean {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.title = newTitle;
    task.category = newCategory;
    return true;
  }
  return false;
}

function deleteTask(id: number): boolean {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}

function markTaskAsCompleted(id: number): boolean {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    return true;
  }
  return false;
}

function categorizeTasks(category: string): Task[] {
  return tasks.filter((task) => task.category === category);
}

function setDeadline(id: number, deadline: Date): boolean {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.deadline = deadline;
    return true;
  }
  return false;
}

// Example usage
const task1 = addTask("Buy groceries", "Personal");
const task2 = addTask("Finish assignment", "Work", new Date("2024-09-10"));

console.log("All Tasks:", tasks);

updateTask(task1.id, "Buy groceries and cook dinner", "Personal");
markTaskAsCompleted(task2.id);

console.log("Updated Tasks:", tasks);
console.log("Work Tasks:", categorizeTasks("Work"));

export {
  addTask,
  updateTask,
  deleteTask,
  markTaskAsCompleted,
  categorizeTasks,
  setDeadline,
};
