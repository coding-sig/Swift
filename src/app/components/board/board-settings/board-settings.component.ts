import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';

@Component({
	selector: 'app-board-settings',
	templateUrl: './board-settings.component.html',
	styleUrls: ['./board-settings.component.scss']
})
export class BoardSettingsComponent implements OnInit {

	constructor() { }
	mockColumnConfig = [
		{ title: 'To Do', statuses: [ 'TO DO' ] },
		{ title: 'In Progress', statuses: [ 'IN PROGRESS' ] },
		{ title: 'Pre-release', statuses: [ 'CODE REVIEW' ] },
		{ title: 'Done', statuses: [ 'DONE', 'RELEASED' ] }
	];

	unmappedStatuses = [ 'QA TEST', 'LINTING' ];

	drop(event) {
		console.log(event);
		window.alert('Drop event' + event);
	}

	ngOnInit() {
	}

}
