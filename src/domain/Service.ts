// import { Gap } from './gap';

export enum ServiceStatus {
  DRAFT = 'draft',
  FINISHED = 'finished',
}

export class Service {
  id: string;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  datePlace: Date;
  status: ServiceStatus
  // holes: Gap[];
}
