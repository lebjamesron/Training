import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listItems = [
    { url: 'signup', lable: 'Signup', icon: 'face' },
    { url: 'login', lable: 'Login', icon: 'input' },
    { url: 'training', lable: 'Training', icon: 'fitness_center' }
  ];
}
