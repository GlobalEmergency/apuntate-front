import {inject, Injectable} from '@angular/core';
import {CanLoad, CanMatchFn, Route, Router, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

export const authGuardFn: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  // return inject(AuthenticationService).canMatch(inject(UserToken));
  // console.log('authGuardFn',inject(AuthenticationService).currentAccessToken !== null);
  return inject(AuthenticationService).currentAccessToken !== null;
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigateByUrl('/login')
          return false;
        }
      })
    );
  }
}
