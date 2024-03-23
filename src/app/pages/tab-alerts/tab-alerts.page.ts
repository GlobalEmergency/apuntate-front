import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ApiService } from '../../../services/api.service';
import { Alert } from '../../../model/alert';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tab-alerts',
  templateUrl: './tab-alerts.page.html',
  styleUrls: ['./tab-alerts.page.scss'],
})
export class TabAlertsPage {
  alerts: Alert[] = [];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.getAlerts().subscribe(
      (alerts) => this.alerts = alerts
    );
  }

  ngOnDestroy() {

  }

}
