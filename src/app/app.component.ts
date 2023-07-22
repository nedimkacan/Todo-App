import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Projesi yapıyoruz bu data değişkenden geliyor.';
  name = 'Mehmet';
  surname = 'Kara';
  job = "Software Developer";
  age = 30;
}
