import {Component, Inject, Input, OnInit} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {
  Service,
  ServiceCategory,
  ServiceForm,
  ServicePriority,
  ServiceStatus,
  ServiceType
} from "../../../../domain/Service";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ApiService} from "../../../../services/api.service";
import {ServicesInterface} from "../../../../domain/ServicesInterface";
import { v4 as uuidv4 } from 'uuid';
import {Router} from "@angular/router";

@Component({
  selector: 'service-add',
  templateUrl: './serviceAdd.component.html',
  styleUrls: ['./serviceAdd.component.scss'],
  imports: [
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    NgIf,
    MatOptionModule,
    MatSelectModule,
    NgForOf,
    MatButtonModule,
    KeyValuePipe
  ],
  standalone: true
})
export class ServiceAddComponent implements OnInit{

  @Input("service")service: Service;

  serviceForm: FormGroup<ServiceForm>;

  public constructor(
    @Inject(ApiService) private apiService: ServicesInterface,
    private router: Router
  ) {
    if(this.service == null){
      this.service = new Service(
        uuidv4(),
        '',
        '',
        new Date(),
        new Date(),
        new Date(),
        ServiceStatus.DRAFT,
        [],
        [],
        ServiceCategory.CATEGORY1,
        ServicePriority.PRIORITY1,
        ServiceType.TYPE1
      )
    }
  }

  ngOnInit(): void {
    this.serviceForm = new FormGroup<ServiceForm>({
      name: new FormControl(this.service.name, {nonNullable: true}),
      description: new FormControl(this.service.description, []),
      category: new FormControl<ServiceCategory>(this.service.category, {nonNullable: true}),
      dateEnd: new FormControl(this.service.dateEnd, {nonNullable: true}),
      datePlace: new FormControl(this.service.datePlace, {nonNullable: true}),
      dateStart: new FormControl(this.service.dateStart, {nonNullable: true}),
      gaps: new FormControl(this.service.gaps, {nonNullable: true}),
      id: new FormControl(this.service.id, {nonNullable: true}),
      priority: new FormControl(this.service.priority, {nonNullable: true}),
      status: new FormControl(this.service.status, {nonNullable: true}),
      type: new FormControl(this.service.type, {nonNullable: true}),
      units: new FormControl(this.service.units, {nonNullable: true})
    })
  }





  sendForm(){
    if(!this.serviceForm.valid) {
      return;
    }
    this.service = Service.fromForm(this.serviceForm.value);
    this.apiService.addService(this.service).subscribe(() => {
      this.router.navigate(['/service/'+this.service['id']]);
    });
  }


  protected readonly ServiceCategory = ServiceCategory;
  protected readonly ServicePriority = ServicePriority;
  protected readonly ServiceType = ServiceType;
}
