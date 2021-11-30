import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoleDetailsPage } from './hole-details.page';

const routes: Routes = [
  {
    path: '',
    component: HoleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoleDetailsPageRoutingModule {}
