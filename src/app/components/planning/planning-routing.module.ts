import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlanningComponent } from './planning.component';

const planningRoutes: Routes = [
    { path:'', component: PlanningComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(planningRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PlanningRoutingModule {}