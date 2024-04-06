import { Routes } from '@angular/router';

import { LoginPage } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
    ],
  },
];
