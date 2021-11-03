import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private defaultIsAdmin = new BehaviorSubject<boolean>(false);
  isAdmin: Observable<boolean> = this.defaultIsAdmin.asObservable();

  private defaultCategoryId = new BehaviorSubject<string>('1');
  categoryId: Observable<string> = this.defaultCategoryId.asObservable();

  constructor() { }

  toggleIsAdmin(){
    console.log("Admin detected in data store");
    this.defaultIsAdmin.next(true);
  }

  changeCategoryId(id: string){
    this.defaultCategoryId.next(id);
  }
}
