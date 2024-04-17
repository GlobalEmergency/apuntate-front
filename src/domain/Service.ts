// import { Gap } from './gap';

import {Gap} from "../model/gap";
import {AbstractType} from "@angular/core";
import {FormControl} from "@angular/forms";

export enum ServiceStatus {
  DRAFT = 'draft',
  FINISHED = 'finished',
}

export enum ServiceCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
  CATEGORY3 = 'category3',
}

export enum ServicePriority {
  PRIORITY1 = 'priority1',
  PRIORITY2 = 'priority2',
  PRIORITY3 = 'priority3',
}

export enum ServiceType {
  TYPE1 = 'type1',
  TYPE2 = 'type2',
  TYPE3 = 'type3',
}

export interface ServiceForm{
  id: FormControl<string>;
  name: FormControl<string>;
  description: FormControl<string|null>;
  dateStart: FormControl<Date>;
  dateEnd: FormControl<Date>;
  datePlace: FormControl<Date>;
  status: FormControl<ServiceStatus>;
  units: FormControl<Gap[]>;
  gaps: FormControl<Gap[]>;
  category: FormControl<ServiceCategory>;
  priority: FormControl<ServicePriority>;
  type: FormControl<ServiceType>;
}

export class Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly dateStart: Date;
  readonly dateEnd: Date;
  readonly datePlace: Date;
  readonly status: ServiceStatus
  readonly units: Gap[];
  readonly gaps: Gap[];
  readonly category: ServiceCategory;
  readonly priority: ServicePriority;
  readonly type: ServiceType;

  constructor(
    id: string,
    name: string,
    description: string,
    dateStart: Date,
    dateEnd: Date,
    datePlace: Date,
    status: ServiceStatus,
    units: Gap[],
    gaps: Gap[],
    category: ServiceCategory,
    priority: ServicePriority,
    type: ServiceType
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.datePlace = datePlace;
    this.status = status;
    this.units = units;
    this.gaps = gaps;
    this.category = category;
    this.priority = priority;
    this.type = type;
  }

  static fromForm(form: any): Service {
    return new Service(
      form.id,
      form.name,
      form.description,
      form.dateStart,
      form.dateEnd,
      form.datePlace,
      form.status,
      form.units,
      form.gaps,
      form.category,
      form.priority,
      form.type
    );
  }
}
