import { environment } from './../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Alert} from "../model/alert";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api_url;
  profile = null;

  alerts: Alert[] = null;


  constructor(private http: HttpClient, private router: Router) {
    this.profile = this.getSecretData();
  }

  getSecretData() {
    return this.http.get(`${this.url}/profile`);
  }

  getAlerts(){
    return this.http.get<Alert[]>(`${this.url}/profile/alerts`);
    /*.subscribe((data: any)=>{
        data.forEach(element => this.alerts.push(Alert.create(element)));
      });*/
  }
}
