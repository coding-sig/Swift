import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectSettingComponent } from './project-setting.component';

const settingRoute: Routes = [
    { path: '', component: ProjectSettingComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(settingRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectSettingRoutingModule {}