import {Component, Inject} from "@angular/core";
import {Service} from "../../../domain/Service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {switchMap} from "rxjs/operators";
import {ServicesInterface} from "../../../domain/ServicesInterface";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  service: Service | null = null;
  selectedId: number;
  personnel: [];
  breakpoint: number = 3;

  constructor(
    private route: ActivatedRoute,
    @Inject(ApiService) private servicesRepository: ServicesInterface
  ) {
  }

  ngOnInit() {
    const selectedId = this.route.snapshot.paramMap.get('id');
    this.servicesRepository.getService(String(selectedId)).subscribe(service => {
      this.service = service;
      console.log(service);
    });
  }

  onResize(event: any) {
    this.breakpoint = Math.round(event.target.innerWidth/200);
  }


}
