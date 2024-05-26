import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Service} from "../../../domain/Service";

@Component({
  selector: 'app-servicestable',
  templateUrl: './servicestable.component.html',
  styleUrls: ['./servicestable.component.scss']
})
export class ServicestableComponent {
  displayedColumnsTable = ['id', 'title', 'users'];

  @Output() serviceClicked = new EventEmitter<Service>();
  @Input() services!: Service[];

  actionService(service: Service) {
    this.serviceClicked.emit(service);
  }
}
