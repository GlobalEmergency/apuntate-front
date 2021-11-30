import { environment } from './../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api_url;
  profile = null;
  constructor(private http: HttpClient, private router: Router) {
    this.profile = this.getSecretData();
  }

  getSecretData() {
    return this.http.get(`${this.url}/profile`);
  }

  getAlerts(){
    return this.http.get(`${this.url}/profile/alerts`);
  }
}
