// This service make the app doesn't actually log in, it just tring to mimic the login process. It has 
// an "isLoggedIn" flag to tell you whether the user is authenticated. Its login method simulates an 
// API call to an external service by returning an Observable that resolves successfully after a short 
// pause. The "redirectUrl" property will store the attempted URL so you can navigate to it after 
// authenticating.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	isLoggedIn = false;

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	login(): Observable<boolean> {
		return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
	}

	logout(): void {
		this.isLoggedIn = false;
	}
}