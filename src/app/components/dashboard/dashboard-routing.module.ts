import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboarRoutes: Routes = [
    { path: '', component: DashboardComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(dashboarRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}