import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAlertsPage } from './tab-alerts.page';

import { TabAlertsPageRoutingModule } from './tab-alerts-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabAlertsPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [TabAlertsPage]
})
export class TabAlertsPageModule { }
