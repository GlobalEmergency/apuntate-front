import { Component, ViewEncapsulation } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-dashboard',
    templateUrl: './calendar.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [
            { title: 'Meeting', start: new Date() }
        ]
    };

}