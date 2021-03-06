import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('Authorization') === null || window.closed) {
      localStorage.removeItem('Authorization');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthGuardReverse implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('Authorization') !== null) {
      this.router.navigate(['/clientes']);
      return false;
    }
    return true;
  }
}
