import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Alert} from '../model/alert';
import {ApiService} from '../services/api.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab-alerts.page.html',
  styleUrls: ['tab-alerts.page.scss']
})
export class TabAlertsPage {
  alerts: Alert[] = null;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(){
    this.apiService.getAlerts().subscribe(
      (alerts) => this.alerts = alerts
    );
  }

  ngOnDestroy(){

  }

}
