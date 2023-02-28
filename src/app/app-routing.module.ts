import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardLayoutComponent} from './layout/dashboard.layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      // {path:'home',component: HomeComponent},
      { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)},
      // { path: 'students', loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule)},
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
