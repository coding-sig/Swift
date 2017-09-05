import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board.component';
import { BoardSettingsComponent } from './board-settings/board-settings.component';

const boardRoutes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'settings', component: BoardSettingsComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(boardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BoardRoutingModule {}