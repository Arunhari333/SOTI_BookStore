import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataStoreService } from '../services/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, OnInit {

  isAdmin: boolean = false;

  constructor(private authService:AuthService, private router:Router, private dataStore:DataStoreService){}

  ngOnInit() {
    this.dataStore.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
    console.log(this.isAdmin);
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.dataStore.isAdmin.subscribe((isAdmin) => {
      console.log(isAdmin);
      this.isAdmin = isAdmin;
    });
    setTimeout(function(){  }, 1000);
    console.log(this.isAdmin);
    if(localStorage.getItem('authToken') && this.isAdmin){
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
     
  }
}
