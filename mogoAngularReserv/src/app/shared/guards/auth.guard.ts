import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expDate = new Date(localStorage.getItem('logOutTime'));
    if(new Date() > expDate)
    {
      this.authService.authFlag = false;
      this.router.navigate(['/', 'admin','login']);
    } else {
      if (this.authService.authFlag) {
        return true;
      } else {
        this.router.navigate(['/', 'admin/','login'])
      }
    }

  }

}
