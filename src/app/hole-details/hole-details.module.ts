import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoleDetailsPageRoutingModule } from './hole-details-routing.module';

import { HoleDetailsPage } from './hole-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoleDetailsPageRoutingModule
  ],
  declarations: [HoleDetailsPage]
})
export class HoleDetailsPageModule {}
