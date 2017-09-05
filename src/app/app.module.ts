import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// default component loaded on AppComponent Initialized
import { LandingModule } from './components/landing-page/landing-page.module'; 

import { AppComponent } from './app.component';
import { AppThemeService } from './services/app-theme.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [AppThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
