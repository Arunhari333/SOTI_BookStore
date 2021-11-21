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

  private defaultOrderItems = new BehaviorSubject<any[]>([]);
  orderItems: Observable<any[]> = this.defaultOrderItems.asObservable();

  constructor() { }

  setIsAdminToTrue(){
    console.log("Admin detected in data store");
    this.defaultIsAdmin.next(true);
  }

  setIsAdminToFalse(){
    console.log("Admin detected in data store");
    this.defaultIsAdmin.next(false);
  }

  changeCategoryId(id: string){
    this.defaultCategoryId.next(id);
  }

  addOrderItems(initOrderItems: any){
    this.defaultOrderItems.next(initOrderItems);
  }

  updateOrderItems(orderItem: any){
    this.orderItems.pipe(take(1))
    .subscribe((oItems: any[]) => {
      let newOrderItems = [...oItems, orderItem];
      this.defaultOrderItems.next(newOrderItems);
    });
  }

  removeOrderItem(orderItemId: number){
    this.orderItems.pipe(take(1))
    .subscribe((oItems: any[]) => {
      let newOrderItems = oItems.filter(oItem => oItem.id != orderItemId);
      this.defaultOrderItems.next(newOrderItems);
    });
  }
}
