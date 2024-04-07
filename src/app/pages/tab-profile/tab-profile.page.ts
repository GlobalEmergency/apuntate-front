import {Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import {map} from "rxjs/operators";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab-profile.page.html',
  styleUrls: ['tab-profile.page.scss']
})
export class TabProfilePage implements OnInit{

  constructor(private api: ApiService, private authService: AuthenticationService, private router: Router) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit() {
    this.api.getSecretData();
  }

  async getSecretData(){
    console.log("Getting data");
    await this.api.getSecretData().pipe(
      map((data: any) => console.log(data))
    );
    console.log("Data receibed");
  }

}
