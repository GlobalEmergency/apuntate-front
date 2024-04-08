import {Observable} from "rxjs";
import {Alert} from "./Alert";

export interface AlertRepositoryInterface {
  discardAlert(alert: Alert): Observable<boolean>;
  getAlerts(): Observable<Alert[]>;
}
