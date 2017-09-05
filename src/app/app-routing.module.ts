import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// root routes, enabled lazy load on children modules
export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'planning', loadChildren: './components/planning/planning.module#PlanningModule' },
    { path: 'board', loadChildren: './components/board/board.module#BoardModule' }
  ];
  
@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    declarations: [],
    exports: [ 
        RouterModule 
    ]
})
export class AppRoutingModule {}