import { Component, OnInit } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

	private myClientId: string = '567234805573-rsvdnmpubrol8mp4oi5o0oqfr69pruls.apps.googleusercontent.com';

	onGoogleSignInSuccess(event: GoogleSignInSuccess) {
		let googleUser: gapi.auth2.GoogleUser = event.googleUser;
		let id: string = googleUser.getId();
		let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
		console.log('ID: ' +
			profile
				.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log(profile);
		alert('Google sign in successfully, please check console for the profile info');
	}
}