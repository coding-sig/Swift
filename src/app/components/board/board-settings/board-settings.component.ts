import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-board-settings',
	templateUrl: './board-settings.component.html',
	styleUrls: ['./board-settings.component.scss'],
	animations: [
		trigger('listAnimation', [
			transition('* => *', [ // each time the binding value changes
				query(':leave', [
					stagger(100, [
						animate('0.5s', style({ opacity: 0 }))
					])
				]),
				query(':enter', [
					style({ opacity: 0 }),
					stagger(100, [
						animate('0.5s', style({ opacity: 1 }))
					])
				])
			])
		])
	]
})
export class BoardSettingsComponent implements OnInit {

	constructor(private dragulaService: DragulaService) {
		dragulaService.setOptions('columns-container-bag', {
			moves: function (el, container, handle) {
				return handle.className === 'mdi mdi-drag';
			},
			direction: 'horizontal'
		});

		dragulaService.setOptions('column-statuses-bag', {
			// moves: function (el, container, handle) {
			// 	return handle.className.includes('status-card');
			// },
			// direction: 'horizontal'
		});
	 }
	mockColumnConfig = [
		{ title: 'To Do', statuses: [ 'TO DO' ] },
		{ title: 'In Progress', statuses: [ 'IN PROGRESS' ] },
		{ title: 'Pre-release', statuses: [ 'CODE REVIEW' ] },
		{ title: 'Done', statuses: [ 'DONE', 'RELEASED' ] }
	];

	unmappedStatuses = [ 'QA TEST', 'LINTING' ];
	

	ngOnInit() {
	}

}
