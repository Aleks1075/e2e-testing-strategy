export class Task {
  id: number;
  title: string;
  completed: boolean;
  category: string;
  deadline: Date | null;

  constructor(
    id: number,
    title: string,
    category: string,
    deadline: Date | null = null
  ) {
    this.id = id;
    this.title = title;
    this.completed = false; // New tasks start as incomplete
    this.category = category;
    this.deadline = deadline;
  }
}
