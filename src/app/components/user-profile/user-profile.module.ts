import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdInputModule, 
	MdDatepickerModule, MdNativeDateModule, MdSelectModule } from '@angular/material';

import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
	imports: [
		CommonModule,
		UserProfileRoutingModule,
		MdButtonModule, MdCheckboxModule, MdInputModule, 
		MdDatepickerModule, MdNativeDateModule, MdSelectModule
	],
	declarations: [
		UserProfileComponent
	],
	providers: []
})
export class UserProfileModule { };