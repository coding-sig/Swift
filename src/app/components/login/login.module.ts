import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/primeng';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	imports: [
		CommonModule,
		InputTextModule,
		LoginRoutingModule
	],
	declarations: [
		LoginComponent
	],
	providers: []
})
export class LoginModule { };