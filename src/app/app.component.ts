import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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

  activeTab: string;
  navTabModel: any[] = [
    {
      title: `DASHBOARD`,
      route: `/dashboard`
    }, {
      title: `PLANNING`,
      route: `/planning`
    },  {
      title: `BOARD`,
      route: `/board`
    }
  ];

  constructor(
    private router: Router
  ) {

  }

  getActiveTab(tabName: string) {
    return this.router.url === tabName ? 'active' : '';
  }

  switchTab(tabName: string) {
    this.activeTab = tabName;
  }

}
