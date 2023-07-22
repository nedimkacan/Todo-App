import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nedim';
  surname = 'Kacan';
  items=[
    {description: 'Breakfast', action: "No"},
    {description: 'Lunch', action: "Yes"},
    {description: 'Dinner', action: "Yes"},
    {description: 'Sleep', action: "No"},
    {description: 'Work', action: "No"},
    {description: 'Study', action: "Yes"},
    {description: 'Play', action: "No"},
    {description: 'Read', action: "Yes"},
    {description: 'Watch', action: "No"},
    {description: 'Listen', action: "Yes"},
    {description: 'Walk', action: "No"},
    {description: 'Run', action: "No"},
  ]
}
