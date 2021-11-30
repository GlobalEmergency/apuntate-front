import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Alert} from '../model/alert';
import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab-alerts.page.html',
  styleUrls: ['tab-alerts.page.scss']
})
export class TabAlertsPage {
  alerts: Alert[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getAlerts().subscribe(data => {
      this.alerts.push(Alert.create(data));
    });
  }

}
