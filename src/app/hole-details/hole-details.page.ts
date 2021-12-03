import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Service } from '../model/service'
import {ApiService} from "../services/api.service";
@Component({
  selector: 'app-hole-details',
  templateUrl: './hole-details.page.html',
  styleUrls: ['./hole-details.page.scss'],
})

export class HoleDetailsPage implements OnInit{

  // Data passed in by componentProps
  @Input('service') service: any;

  constructor(
    private apiService: ApiService,
    public modalController: ModalController
  ) {

  }

  ngOnInit(){
    console.log("event to detail" ,this.service);
    this.apiService.getServiceDetails(this.service.id).subscribe(
      (data: any) => this.service = data
    );
  }
  public dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
