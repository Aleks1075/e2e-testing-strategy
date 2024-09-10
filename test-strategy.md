# Test Strategy for To-Do List Application

## 1. Unit Tests

- **Purpose**: To verify that individual functions work as expected.
- **Functions to Test**:
  - `addTask()`: Ensure that tasks are added with correct data.
  - `updateTask()`: Ensure that tasks can be updated correctly.
  - `deleteTask()`: Ensure that tasks are deleted correctly.
  - `markTaskAsCompleted()`: Ensure that tasks are marked as completed.

## 2. Integration Tests

- **Purpose**: To verify that different components of the application work together.
- **Test Cases**:
  - Add a task and then categorize it.
  - Add a task, set a deadline, and mark it as completed.

## 3. Specification-Based Tests

- **Purpose**: To ensure that the application meets user requirements.
- **Test Cases**:
  - Add tasks with various categories and deadlines and ensure they appear in the correct lists.
