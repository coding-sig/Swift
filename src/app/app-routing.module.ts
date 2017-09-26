import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// default component loaded on AppComponent Initialized
import { DashboardModule } from './components/dashboard/dashboard.module'; 

// root routes, enabled lazy load on children modules
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
    { path: 'planning', loadChildren: './components/planning/planning.module#PlanningModule' },
    { path: 'board', loadChildren: './components/board/board.module#BoardModule' },
    { path: 'project', loadChildren: './components/project-setting/project-setting.module#ProjectSettingModule'},
    { path: 'user-profile', loadChildren: './components/user-profile/user-profile.module#UserProfileModule' },
    { path: 'dashboard', component: DashboardComponent }
  ];
    
@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { enableTracing: true } /** debugging purposes **/ ),
        DashboardModule 
    ],
    declarations: [],
    exports: [ 
        RouterModule 
    ]
})
export class AppRoutingModule {}