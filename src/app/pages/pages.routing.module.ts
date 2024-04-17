import { Routes } from '@angular/router';
// import { AppDashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ServiceComponent} from "./service/service.component";

export const PagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: 'Calendar',
    },
  },
  {
    path: 'service/:id',
    component: ServiceComponent,
    data: {
      title: 'Service',
    },
  },
];
