import {Service} from "./Service";
import {Observable} from "rxjs";

export interface ServicesInterface{
  getNextEvents(): Observable<Service[]>;
  getService(id: string): Observable<Service>;
}
