import { Component, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-hole-details',
  templateUrl: './hole-details.page.html',
  styleUrls: ['./hole-details.page.scss'],
})

export class HoleDetailsPage{

  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(public modalController: ModalController) {

  }

  public dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
