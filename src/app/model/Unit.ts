import {Service} from "../../domain/Service";

export class Unit{
  id: string;
  identifier: string;
  name: string;
  services: Service[];
  speciality: string;
}
