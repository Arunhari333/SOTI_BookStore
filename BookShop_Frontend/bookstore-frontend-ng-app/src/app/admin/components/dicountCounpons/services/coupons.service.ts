import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http:HttpClient) { }
  addCoupon(formData:any):any{
    return this.http.post('https://localhost:44374/api/DiscountCoupons',formData)
    .pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  deleteCoupon(id:any) {
    let url: string = `https://localhost:44374/api/DiscountCoupons/${id}`;
    return this.http.delete(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getCoupons(){
    let url: string = `https://localhost:44374/api/DiscountCoupons`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
