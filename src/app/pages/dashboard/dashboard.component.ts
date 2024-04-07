import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {ApiService} from "../../../services/api.service";

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
}

const TABLE_DATA: PeriodicElement[] = [
  { position: 1123412, name: 'Preventivo Uvas', date: "01/01/2023" },
  { position: 25234, name: 'Fiestas alcorcón', date: "12/02/2024" },
  { position: 3523434, name: 'Procesión morena', date: "13/12/2025" },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  displayedColumnsTable: string[] = ['position', 'name', 'date'];
  dataSourceTable = TABLE_DATA;

  services: Object;
  constructor(
    private api:ApiService
  ) {
    this.api.getCalendar().subscribe(data => {
      this.services = data
    })
  }
}
