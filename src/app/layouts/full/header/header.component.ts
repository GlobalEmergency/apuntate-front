import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthenticationService} from "../../../../services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "../../../../services/alert.service";
import {AlertsDialogComponent} from "../../../components/alerts/AlertsDialogComponent";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  alertsActive = 0;

  constructor(
    public dialog: MatDialog,
    public authService: AuthenticationService,
    public router: Router,
    public alertService: AlertService
  ) {
    this.alertService.getAlerts().subscribe(alerts => {
      this.alertsActive = alerts.filter(alert => alert.show).length;
    });
  }

  showAlerts() {
    this.dialog.open(AlertsDialogComponent, {
      width: '100%',
      panelClass: 'alerts-dialog',
    });
  }

  closeSession() {
    this.authService.logout();
  }
}
