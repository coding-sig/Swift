import { Subject } from 'rxjs/Rx';
import { AppThemeService } from './services/app-theme.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import './services/app-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppThemeService]
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
    }, {
      title: `BOARD`,
      route: `/board`
    }
  ];

  appTheme: string;

  constructor(
    private router: Router,
    private themeService: AppThemeService
  ) {
    const themeSubcription: Subject<string> = this.themeService.getColorTheme();
    themeSubcription.subscribe(theme => this.appTheme = theme);
  }

  getActiveTab(tabName: string) {
    return this.router.url === tabName ? 'active' : '';
  }

  switchTab(tabName: string) {
    this.activeTab = tabName;
  }

  changeColorTheme() {
    return this.themeService.changeColorTheme();
  }

  getThemeClassName(): string {
    return this.appTheme ? this.appTheme : `light-theme`;
  }

}
