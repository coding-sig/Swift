import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {

  constructor() { }

	hero = 'assets/user-profile/user-profile-spiderman.png'

  ngOnInit() {
  }

}
