import {Component, ViewChild, OnInit, Inject, LOCALE_ID} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {formatDate} from '@angular/common';
import {CalendarComponent} from 'ionic2-calendar';
import {HoleDetailsPage} from '../hole-details/hole-details.page';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'holes.page.html',
  styleUrls: ['holes.page.scss']
})
export class HolesPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'week',
    currentDate: new Date(),
    locale: 'en'
  };
  selectedDate: Date;

  currentModal = null;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    public modalController: ModalController,
    private apiService: ApiService
  ) {
    console.log(locale);
    this.calendar.locale = locale;
    // this.myCal.onRangeChanged = this.onRangeChanged();
  }

  onRangeChanged(event) {
    console.log("Range changed", event);
    this.apiService.getHoles(event.startTime, event.endTime).subscribe(
      (events: any) => {
        this.eventSource = events;
        this.eventSource.forEach(event => {
          event.startTime = new Date(Date.parse(event.startTime));
          event.endTime = new Date(Date.parse(event.endTime));
          return event;
        });
      });
  }


  ngOnInit() {
  }

  async presentModal(service) {
    console.log("present modal",service);
    const modal = await this.modalController.create({
      component: HoleDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {'service':service}
    });
    this.currentModal = modal;
    return await modal.present();
  }

  dismiss() {
    console.log("DISMISS");
  }

  dismissModal() {
    if (this.currentModal) {
      this.currentModal.dismiss().then(() => {
        this.currentModal = null;
      });
    }
  }


// Change current month/week/day
  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

// Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

// Calendar event was clicked
  async onEventSelected(event) {
    this.presentModal(event);
    // // Use Angular date pipe for conversion
    // let start = formatDate(event.startTime, 'medium', this.locale);
    // let end = formatDate(event.endTime, 'medium', this.locale);
    //
    // const alert = await this.alertCtrl.create({
    //   header: event.title,
    //   subHeader: event.desc,
    //   message: 'From: ' + start + '<br><br>To: ' + end,
    //   buttons: ['OK'],
    // });
    // alert.present();
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Service - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }

}
