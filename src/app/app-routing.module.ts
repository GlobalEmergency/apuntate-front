import {inject, NgModule} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route, Router,
  RouterModule, RouterStateSnapshot,
  Routes,
  UrlSegment
} from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthenticationService } from '../services/authentication.service';
import {ErrorComponent} from "./pages/error/error.component";
const userLogged: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  var ret = inject(AuthenticationService).checkAuthentication();
  if(ret) return true;
  inject(Router).navigate(['/login']);
  return false;
};
const userLogoff: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  var ret = inject(AuthenticationService).checkAuthentication();
  if(ret) inject(Router).navigate(['/']);
  return !ret;
};
const userAdmin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthenticationService).checkAuthentication('ROLE_ADMIN');
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullComponent,
    canActivateChild: [userLogged],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
        canActivateChild: [userAdmin],
      },
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },

    //   // {
    //   //   path: 'ui-components',
    //   //   loadChildren: () =>
    //   //     import('./pages/ui-components/ui-components.module').then(
    //   //       (m) => m.UicomponentsModule
    //   //     ),
    //   // },
    //   // {
    //   //   path: 'extra',
    //   //   loadChildren: () =>
    //   //     import('./pages/extra/extra.module').then((m) => m.ExtraModule),
    //   // },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    canActivateChild: [userLogoff],
    // canActivateChild: [!userLogged],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule,
          ),
        // canLoad: [IntroGuard, AutoLoginGuard]
      },
    ],
  },
  {
    path: '**',
    // redirectTo: '/notfound',
    component: ErrorComponent,
  },
  {
    path: 'notfound',
    component: ErrorComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
