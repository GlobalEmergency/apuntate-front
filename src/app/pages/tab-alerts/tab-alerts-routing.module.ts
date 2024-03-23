import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAlertsPage } from './tab-alerts.page';

const routes: Routes = [
  {
    path: '',
    component: TabAlertsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAlertsPageRoutingModule {}
