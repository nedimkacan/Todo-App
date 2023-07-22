import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  getItems() {
    return this.model.items.filter((item) => !item.action);
  }
  addItem(item: string) {
    if (item != '') {
      this.model.items.push(new TodoItem(item, false));
    }
  }
}
