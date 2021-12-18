import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Service } from '../model/service'
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-hole-details',
  templateUrl: './hole-details.page.html',
  styleUrls: ['./hole-details.page.scss'],
})

export class HoleDetailsPage implements OnInit{

  public service: Service;
  // Data passed in by componentProps
  @Input('serviceCalendar') serviceCalendar: any;

  constructor(
    private apiService: ApiService,
    public modalController: ModalController
  ) {

  }

  ngOnInit(){
    console.log('event to detail' ,this.serviceCalendar);
    this.apiService.getServiceDetails(this.serviceCalendar.id).subscribe(
      (data: Service) => this.service = data
    );
  }

  dismiss() {
    console.log('DISMISS');
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  test(){
    console.log("test");
  }

}
