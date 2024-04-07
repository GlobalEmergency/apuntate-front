import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {CalendarApi, CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import {ApiService} from "../../../services/api.service";
import {FullCalendarComponent} from "@fullcalendar/angular";

@Component({
    selector: 'app-dashboard',
    templateUrl: './calendar.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent{
  // @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  // calendarApi: CalendarApi;
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        firstDay: 1,
        weekends: true,
        events: (fetchInfo, successCallback, failureCallback) => {
          this.apiService.getCalendar(fetchInfo.start, fetchInfo.end).subscribe({
              next: events => successCallback(events),
              error: error => failureCallback(error)
          });
        }
    };

  constructor(
    private apiService: ApiService
  ) {
  }

}
