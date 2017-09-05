import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-page-routing.module';

import { LandingPageComponent } from './landing-page.component';


@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule
    ],
    declarations: [ 
        LandingPageComponent
     ],
    providers: []
})
export class LandingModule {};