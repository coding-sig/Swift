import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appIcon = {
    url: `./assets/orange-logo.png`,
    height: 30,
    width: 30
  };
}
