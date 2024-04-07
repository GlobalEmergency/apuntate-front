import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {HolesComponent} from "../../components/holes/holes.component";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../tab-alerts/tab-alerts.module').then(m => m.TabAlertsPageModule)
      // },
      {
        path: 'holes',
        component: HolesComponent
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab-profile/tab-profile.module').then(m => m.TabProfilePageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/holes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/holes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
