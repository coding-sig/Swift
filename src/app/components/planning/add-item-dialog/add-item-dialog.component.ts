import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PlanningService } from '../planning.service';

@Component({
    selector: 'add-item-dialog',
    templateUrl: './add-item-dialog.component.html',
    styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {

    public item: {
        title: string,
        description: any
    }

    constructor() {
        this.item = {
            title: ``,
            description: ``
        }
    }
    @Input() sprintId: number;
    @Input() display: boolean;

    @Output() onDialogStatusChange =new EventEmitter<boolean>();
    
    ngOnInit() {
        // todo: solve dependency issue on quill editor
    }

    ngOnChanges(changes) {
        if (!changes.sprintId) {
            return;
        }
    }

    closeDialog() {
        this.onDialogStatusChange.emit(false);
    }
}