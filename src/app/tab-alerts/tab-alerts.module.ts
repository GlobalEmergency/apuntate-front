import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAlertsPage } from './tab-alerts.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabAlertsPageRoutingModule } from './tab-alerts-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabAlertsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [TabAlertsPage]
})
export class TabAlertsPageModule {}
