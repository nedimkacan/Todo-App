export class Model {
  user: String;
  items: TodoItem[];
  constructor() {
    this.user = 'Nedim';
    this.items = [
      new TodoItem('Breakfast', true),
      new TodoItem('Lunch', false),
      new TodoItem('Dinner', true),
      new TodoItem('Sleep', false),
      new TodoItem('Work', true),
      new TodoItem('Study', false),
    ];
  }
}

export class TodoItem {
  description;
  action;
  constructor(description: String, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
