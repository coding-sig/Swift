import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AppThemeService {

  private _theme: BehaviorSubject<string> = new BehaviorSubject(String(`light-theme`));;
  private colorTheme: string = `light-theme`;

  constructor() { 
    this.colorTheme = 'light-theme'; // initial value
  }
 
  getTheme(): Observable<string> {
    return this._theme.asObservable();
  }

  setTheme(theme: string) {
    this.colorTheme = theme;
    this._theme.next(this.colorTheme);
  }

  changeTheme() {
    if (this.colorTheme === `light-theme`) {
      this.setTheme(`dark-theme`);
      return;
    }
    this.setTheme(`light-theme`);
  }

}
