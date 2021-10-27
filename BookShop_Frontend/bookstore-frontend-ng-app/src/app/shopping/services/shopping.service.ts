import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  getOrderItems(){
    let url: string = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  saveOrderItems(orderItems: any[]){
    let userId: number = 1;
    let url: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.put(url, orderItems)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
