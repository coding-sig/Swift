import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { ProjectSettingComponent } from './project-setting.component';
import { ProjectSettingRoutingModule } from './project-setting-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProjectSettingRoutingModule,
        InputTextModule,
        ButtonModule
    ],
    declarations:[
        ProjectSettingComponent
    ]
})
export class ProjectSettingModule {}