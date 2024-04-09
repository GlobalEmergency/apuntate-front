import {Component, ViewEncapsulation, ViewChild, Injectable, Inject} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ServicesInterface} from "../../../domain/ServicesInterface";
import {Service} from "../../../domain/Service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  displayedColumnsTable: string[] = ['id', 'title', 'users'];

  services: Service[];

  constructor(
    @Inject(ApiService) private serviceRepository: ServicesInterface,
    private router: Router,
  ) {
    this.serviceRepository.getNextEvents().subscribe(data => {
      this.services = data
    })
  }

  showService(service: Service) {
    this.router.navigate(['/service', service.id]);
  }
}
