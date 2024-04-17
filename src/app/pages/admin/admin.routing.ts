import { Routes } from '@angular/router';
import {ServiceAddComponent} from "./ServiceAdd/serviceAdd.component";

export const AdminRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'service/add',
        component: ServiceAddComponent,
      },
    ],
  },
];
