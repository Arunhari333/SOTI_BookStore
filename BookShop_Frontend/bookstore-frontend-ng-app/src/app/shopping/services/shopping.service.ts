import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  getOrderItems(){
    let userId: number = 2;
    let url: string = `https://localhost:44374/api/OrderItems/GetByUser/${userId}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  saveOrderItems(orderItems: any[]){
    let url: string = `https://jsonplaceholder.typicode.com/users`;
    return this.http.put(url, orderItems)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  //To delete an item from cart
  deleteOrderItem() {
    let userId: number = 2;
    let url: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.post(url, userId)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
  }

