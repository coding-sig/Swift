import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectSideNavComponent } from './project-side-nav.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ProjectSideNavComponent
    ],
    exports: [
        ProjectSideNavComponent
    ]
})

export class ProjectSideNavModule {}