import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns = ['Name', 'Age', 'Email'];
  data = [
    { Name: 'John Doe', Age: 28, Email: 'john.doe@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane.smith@example.com' },
    { Name: 'Sam Johnson', Age: 45, Email: 'sam.johnson@example.com' }
  ];
  title = 'myApp';
}
