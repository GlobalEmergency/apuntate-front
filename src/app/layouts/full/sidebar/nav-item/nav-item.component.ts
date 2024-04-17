import { Component, Input, OnChanges } from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../../../services/nav.service';
import {AuthenticationService} from "../../../../../services/authentication.service";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: [],
})
export class AppNavItemComponent implements OnChanges {
  @Input() item: NavItem;
  @Input() depth: any;
  isAdmin: boolean = false;

  constructor(
    public navService: NavService,
    public router: Router,
    public authService: AuthenticationService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
    this.isAdmin = this.authService.checkAuthentication('ROLE_ADMIN');
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0,
    });
  }
}
