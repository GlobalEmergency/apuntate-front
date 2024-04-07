import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { MatTabsModule } from '@angular/material/tabs';
import { HolesComponent } from '../../components/holes/holes.component'; // Importa HolesComponent aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MatTabsModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
