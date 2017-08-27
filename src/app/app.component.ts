import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // todo: need to add typings to the model in beta
  appIcon: any = {
    url: `./assets/app-logo/orange-logo.png`,
    height: 30,
    width: 30
  };

  userProfile: any = {
    name: `Picky User`,
    id: `12345`,
    picUrl: ``,
    defaultPicUrl: `./assets/user-profile/batman-user-profile.png`
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
