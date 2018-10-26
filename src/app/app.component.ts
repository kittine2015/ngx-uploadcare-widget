import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yourOnChangeHandler = (e) => {
    alert('Privet')
  }

  title = 'uploadcare';
}
