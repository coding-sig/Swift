import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	constructor() { }

	mockColumns: any[] = [
		{
			title: 'To Do',
			cards: [
				{ title: 'Create mock data for backend', storySize: 2, avatarUrl: 'assets/myAvatar.png' },
				{ title: 'Create landing page', storySize: 4, avatarUrl: 'assets/myAvatar2.png' }
			]
		},
		{
			title: 'In Progress',
			cards: [
				{ title: 'Kill a dragon in the deep forest', storySize: 8, avatarUrl: 'assets/myAvatar3.png' },
				{ title: 'Defend the castle', storySize: 1, avatarUrl: 'assets/myAvatar.png' },
				{ title: 'Capture a white walker', storySize: 16, avatarUrl: 'assets/myAvatar4.png' }
			]
		},
		{
			title: 'Done',
			cards: [
				{ title: 'Finish Final Fantasy XV - Chapter 4', storySize: 4, avatarUrl: 'assets/myAvatar2.png' },
				{ title: 'Watch Kingglaive in BlueRay player', storySize: 1, avatarUrl: 'assets/myAvatar4.png' },
				{ title: 'Test and purchase Skyrim Remaster Edition', storySize: 16, avatarUrl: 'assets/myAvatar4.png' }
			]
		}
	];
	
	draggedItem: {}

	dragStart(event: object, item: object) {
		this.draggedItem = item;
	}

	dragEnd(event: object) {
		this.draggedItem = null;
	}

	drop(event: object) {
		this.draggedItem = null;
		console.log(event);
	}

	hero = 'assets/user-profile/user-profile-spiderman.png'

	ngOnInit() {
	}

}
