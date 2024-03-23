import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HolesPage } from './holes.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HolesPageRoutingModule } from './holes-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';
// import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    HolesPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [HolesPage],
  providers: [
    { provide: 'en', useValue: 'es-ES' }
  ]
})
export class HolesPageModule {}
