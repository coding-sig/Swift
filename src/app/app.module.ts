import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectSideNavModule } from './components/project-side-nav/project-side-nav.module';
import { AppThemeService } from './services/app-theme.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProjectSideNavModule
  ],
  providers: [AppThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
