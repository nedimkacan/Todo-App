import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  isDisplay = false;
  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem(item: string) {
    if (item != '') {
      this.model.items.push(new TodoItem(item, false));
    }
  }
}
