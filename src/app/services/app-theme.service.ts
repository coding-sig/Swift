import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppThemeService {

  private colorThemeSubject: Subject<string>;
  private colorTheme: string;

  constructor() { 
    this.colorThemeSubject = new Subject();
    this.colorTheme = 'light-theme'; // default theme
  }
 
  getColorTheme() {
    return this.colorThemeSubject;
  }

  setColorTheme(theme: string) {
    this.colorTheme = theme;
    this.colorThemeSubject.next(this.colorTheme);
  }

  changeColorTheme() {
    if (this.colorTheme === `light-theme`) {
      this.setColorTheme(`dark-theme`);
      return;
    }
    this.setColorTheme(`light-theme`);
  }

}
