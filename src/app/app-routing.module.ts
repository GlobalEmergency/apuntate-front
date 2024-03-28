import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
        canLoad: [AuthGuard] // Check if we should show the introduction or fo
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
