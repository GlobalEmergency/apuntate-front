import {Component, Inject} from "@angular/core";
import {Service} from "../../../domain/Service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {switchMap} from "rxjs/operators";
import {ServicesInterface} from "../../../domain/ServicesInterface";
import {AuthenticationService} from "../../../services/authentication.service";

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
    private router: Router,
    private authService: AuthenticationService,
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

  isAdmin(): boolean {
    return this.authService.checkAuthentication('ROLE_ADMIN');
  }

  edit() {
    if(this.service == null){
      return;
    }
    this.router.navigate(['/admin/service/', this.service.id]).then(r => true);
  }

  remove(){

  }

}
