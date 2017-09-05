import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

const landingRoutes: Routes = [
    { path: 'landing', component: LandingPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(landingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LandingRoutingModule {}