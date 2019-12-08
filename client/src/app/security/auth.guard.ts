/* import { UserService } from './../service/user/user.service'; */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
/* import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service'; */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(/* public auth: AuthService, */ public router: Router) {}
  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      //console.log('AuthGuard: não esta autenticado vai pro login')
      //essa regra não deveria estar no handler
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  }
}
