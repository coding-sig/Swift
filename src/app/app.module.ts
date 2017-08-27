import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlanningComponent } from './components/planning/planning.component';
import { BoardComponent } from './components/board/board.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PlanningCardComponent } from './components/planning-card/planning-card.component';

const appRoutes: Routes = [
  { path: 'planning', component: PlanningComponent },
  { path: 'board', component: BoardComponent },
  { path: 'dashboard', component: DashBoardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    BoardComponent,
    DashBoardComponent,
    PlanningCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
