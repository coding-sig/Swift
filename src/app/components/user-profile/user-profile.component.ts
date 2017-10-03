import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	constructor() { }

	genderOptions = [
		{ value: 'Male', viewValue: 'Male' },
		{ value: 'Female', viewValue: 'Female' }
	];

	ngOnInit() {
	}

}
