import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'employees',
    loadComponent: () => import('./components/employee-list/employee-list.component').then(m => m.EmployeeListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'employees/new',
    loadComponent: () => import('./components/employee-form/employee-form.component').then(m => m.EmployeeFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'employees/:id',
    loadComponent: () => import('./components/employee-detail/employee-detail.component').then(m => m.EmployeeDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'employees/:id/edit',
    loadComponent: () => import('./components/employee-form/employee-form.component').then(m => m.EmployeeFormComponent),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/employees'
  }
];
