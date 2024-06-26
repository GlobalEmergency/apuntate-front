import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
// import { AppDashboardComponent } from './dashboard/dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {CalendarComponent} from "./calendar/calendar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ServicestableComponent} from "../components/servicestable/servicestable.component";

@NgModule({
  declarations: [
    CalendarComponent,
    DashboardComponent,
    ServicestableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    // NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    FullCalendarModule,
  ],
  exports: [TablerIconsModule],
})
export class PagesModule { }
