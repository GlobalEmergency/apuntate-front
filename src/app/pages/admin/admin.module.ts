import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AdminRouting} from "./admin.routing";
import {ServiceAddComponent} from "./ServiceAdd/serviceAdd.component";

@NgModule({
  imports: [
    RouterModule.forChild(AdminRouting),
  ],
  declarations: [
  ],
})
export class AdminModule { }
