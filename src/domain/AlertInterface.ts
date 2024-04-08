import {Alert} from "./Alert";
import {Observable} from "rxjs";

export interface AlertInterface {

  getAlerts(): Observable<Alert[]>;

}
