// import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import {ServicesInterface} from "../domain/ServicesInterface";
import {Service} from "../domain/Service";
import {EventInput} from "@fullcalendar/core";
import {Alert} from "../domain/Alert";
import {AlertRepositoryInterface} from "../domain/AlertRepositoryInterface";

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ServicesInterface, AlertRepositoryInterface{
  url = environment.api_url;
  profile = null;

  alerts: Alert[] = [];

  constructor(private http: HttpClient, private router: Router) {
    // this.getSecretData().subscribe((data: any) => {
    //   this.profile = data;
    // });
  }

  getSecretData() {
    return this.http.get(`${this.url}/profile`);
  }


  getHoles(startTime: Date, endTime: Date) {
    const start = startTime.getUTCDate() + '-' + (startTime.getUTCMonth() + 1) + '-' + startTime.getUTCFullYear();
    const end = endTime.getUTCDate() + '-' + (endTime.getUTCMonth() + 1) + '-' + endTime.getUTCFullYear();
    return this.http.get(`${this.url}/services/calendar?s=` + start + '&e=' + end);
  }

  getServiceDetails(serviceId: number) {
    return this.http.get(`${this.url}/services/` + serviceId);
  }

  getCalendar(start:Date, end:Date): Observable<EventInput[]> {
    return this.http.get<EventInput[]>(`${this.url}/services/calendar?s=` + start.toISOString() + '&e=' + end.toISOString());
  }

  getNextEvents(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.url}/services/nexts`);
  }

  getService(id: string): Observable<Service> {
    return this.http.get<Service>(`${this.url}/services/${id}`);
  }

  getAlerts() {
    return this.http.get<Alert[]>(`${this.url}/alerts`);
  }

  discardAlert(alert: Alert): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/alerts/${alert.id}`,alert);
  }

  addService(service: Service): Observable<void> {
    return this.http.post<void>(`${this.url}/services`, service);
  }
}
