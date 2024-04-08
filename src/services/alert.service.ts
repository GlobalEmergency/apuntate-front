import {Inject, Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert } from '../domain/Alert';
import { ApiService } from './api.service';
import {map} from "rxjs/operators";
import {AlertRepositoryInterface} from "../domain/AlertRepositoryInterface";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertsSubject: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
  private alerts$: Observable<Alert[]> = this.alertsSubject.asObservable();

  constructor(
    private snackBar: MatSnackBar,
    @Inject(ApiService) private alertRepository: AlertRepositoryInterface,
  ) {
    this.loadInitialAlerts();
  }

  private loadInitialAlerts() {
    this.alertRepository.getAlerts().subscribe(alerts => this.alertsSubject.next(alerts));
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getAlerts(): Observable<Alert[]> {
    return this.alerts$;
  }

  discardAlert(alert: Alert) {

    const updatedAlerts = this.alertsSubject.value.map(alertMap => {
      if (alertMap.id === alert.id) {
        return { ...alertMap, show: false };
      }
      return alertMap;
    });

    this.alertRepository.discardAlert(alert).subscribe(() => {
      this.alertsSubject.next(updatedAlerts);
    });
  }
}
