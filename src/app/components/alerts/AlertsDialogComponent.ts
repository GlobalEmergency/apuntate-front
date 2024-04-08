import { Component } from '@angular/core';
import {Alert} from "../../../domain/Alert";
import {AlertService} from "../../../services/alert.service";
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-alerts-dialog',
  templateUrl: './alerts.component.html',
  imports: [
    MatCardModule,
    NgForOf,
    MatIconModule,
    NgClass
  ],
  standalone: true
})
export class AlertsDialogComponent {

  alerts : Alert[] = [];

  public constructor(
    private alertService: AlertService,
  ) {
    this.alertService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  public discardAlert(alert: Alert) {
    this.alertService.discardAlert(alert);
  }
}
