import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  getOrderItems(){
    let userId: number = 1;
    let url: string = `https://localhost:44374/api/OrderItems/GetByUser/${userId}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  saveOrderItems(orderItems: any[]){
    let url: string = `https://localhost:44374/api/OrderItems`;
    return this.http.put(url, orderItems)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  //To delete an item from cart
  deleteOrderItem(id:any) {
    let userId: number = 1;
    let url: string = `https://localhost:44374/api/OrderItems/${id}`;
    return this.http.delete(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }


  createShippingAddress(formData: any) {
    let url: string = 'https://localhost:44374/api/Shipping';
    console.log(formData);
    return this.http.post(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
  //to get shipping addresses
  getShippingAddress() {
    let userId: number = 5;
    let url: string = `https://localhost:44374/api/Shipping/SearchByUserId/${userId}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
  //url change to wishlist
  getWishlistItems() {
    return this.http.get('https://localhost:44374/api/Books')
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  createOrder(id: any,totalCost: number){
    let userId: number = 5;
    let url:string = `https://localhost:44374/api/Order/PlaceOrder/${userId}/${id}/${totalCost}`;
    return this.http.put(url,{'userId':userId,'shippingAddressId':id,'totalPrice':totalCost})
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }
}

