import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component'; 
import { PlanningCardComponent } from './planning-card/planning-card.component';

import { PlanningService } from './planning.service';

@NgModule({
    imports: [
         CommonModule,
         PlanningRoutingModule, 
         SplitButtonModule,
         DragDropModule 
    ],
    declarations: [ 
        PlanningComponent,
        PlanningCardComponent
     ],
     providers: [
         PlanningService
     ]
})
export class PlanningModule { };