"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
let tasks = [];
let currentId = 1;
function addTask(title, category, deadline = null) {
    const task = new task_1.Task(currentId++, title, category, deadline);
    tasks.push(task);
    return task;
}
function updateTask(id, newTitle, newCategory) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.title = newTitle;
        task.category = newCategory;
        return true;
    }
    return false;
}
function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}
function markTaskAsCompleted(id) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.completed = true;
        return true;
    }
    return false;
}
function categorizeTasks(category) {
    return tasks.filter((task) => task.category === category);
}
function setDeadline(id, deadline) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.deadline = deadline;
        return true;
    }
    return false;
}
// Example usage
const task1 = addTask("Buy groceries", "Personal");
const task2 = addTask("Finish assignment", "Work", new Date("2024-09-15"));
console.log("All Tasks:", tasks);
updateTask(task1.id, "Buy groceries and cook dinner", "Personal");
markTaskAsCompleted(task2.id);
console.log("Updated Tasks:", tasks);
console.log("Work Tasks:", categorizeTasks("Work"));
