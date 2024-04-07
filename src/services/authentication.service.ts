import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CanLoadFn, CanMatchFn, Router, UrlMatcher, UrlSegment} from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentAccessToken: string | null = null;
  url = environment.api_url;

  constructor(@Inject(HttpClient) private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  public checkAuthentication(): boolean {
    return this.currentAccessToken !== null;
  }

  loadToken() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      this.currentAccessToken = token;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<{ token: string; refresh_token: string }>(`${this.url}/auth/login`, credentials).pipe(
      switchMap((tokens: { token: string; refresh_token: string }) => {
        return this.storeAccessToken(tokens.token, tokens.refresh_token)
      }),
    );
  }

  storeAccessToken(token: string, refreshToken: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    this.currentAccessToken = token;
    this.isAuthenticated.next(true);
    return token;
  }

  logout() {
    this.currentAccessToken = null;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });

    return this.http.post(`${this.url}/auth/logout`, {}).pipe(
      switchMap(_ => {
        return of(true);
      })
    ).subscribe();
  }

  getNewAccessToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (refreshToken && refreshToken !== 'undefined') {
      console.log('refresh', refreshToken);
      return this.http.post(`${this.url}/auth/refresh`, { refresh_token: refreshToken });
    } else {
      this.logout();
      return null;
    }
  }
}
