"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, category, deadline = null) {
        this.id = id;
        this.title = title;
        this.completed = false; // New tasks start as incomplete
        this.category = category;
        this.deadline = deadline;
    }
}
exports.Task = Task;
