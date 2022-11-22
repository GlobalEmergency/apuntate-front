import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'alerts',
        loadChildren: () => import('../tab-alerts/tab-alerts.module').then(m => m.TabAlertsPageModule)
      },
      {
        path: 'holes',
        loadChildren: () => import('../tab-holes/holes.module').then(m => m.HolesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab-profile/tab-profile.module').then(m => m.TabProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/app/alerts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/alerts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
