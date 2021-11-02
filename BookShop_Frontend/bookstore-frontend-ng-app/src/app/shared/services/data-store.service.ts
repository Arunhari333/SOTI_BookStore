import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private defaultIsAdmin = new BehaviorSubject<boolean>(false);
  isAdmin: Observable<boolean> = this.defaultIsAdmin.asObservable();

  constructor() { }

  toggleIsAdmin(){
    console.log("Admin detected in data store");
    this.defaultIsAdmin.next(true);
  }
}
