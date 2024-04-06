import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import {ApiService} from "../../../services/api.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-dashboard',
    templateUrl: './calendar.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit{
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [
            { title: 'Meeting', start: new Date() }
        ]
    };
    events: Observable<Object>;

  constructor(
    private apiService: ApiService
  ) {

  }
  async ngOnInit() {
    console.log('CalendarComponent');
    this.events = await this.apiService.getCalendar();
  }




}
