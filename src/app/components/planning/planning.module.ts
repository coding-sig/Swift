import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { PlanningCardComponent } from './planning-card/planning-card.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

import { PlanningService } from './planning.service';
import { ButtonFilterPipe } from './planning.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlanningRoutingModule,
        SplitButtonModule,
        DragDropModule,
        DialogModule,
        InputTextModule,
        EditorModule
    ],
    declarations: [
        PlanningComponent,
        PlanningCardComponent,
        ButtonFilterPipe,
        AddItemDialogComponent
    ],
    providers: [
        PlanningService
    ]
})
export class PlanningModule { }