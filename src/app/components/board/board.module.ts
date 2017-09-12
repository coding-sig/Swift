import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component'; 
import { BoardSettingsComponent } from './board-settings/board-settings.component';
import { StoryDetailsComponent } from '../story-details/story-details.component';

@NgModule({
    imports: [
        CommonModule,
        BoardRoutingModule,
        TabViewModule,
        InputTextModule,
        DragDropModule
    ],
    declarations: [ 
        BoardComponent,
        BoardSettingsComponent,
        StoryDetailsComponent
    ],
    providers: []
})
export class BoardModule { };