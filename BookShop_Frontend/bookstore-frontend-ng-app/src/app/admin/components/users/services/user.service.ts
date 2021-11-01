import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): any{
    let url: string = 'https://localhost:44374/api/Users';
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getUser(id: string|null): any{
    let url: string = `https://localhost:44374/api/Users/${id}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  toggleUserStatus(id: string|null): any{
    let url: string = `https://localhost:44374/api/Users/ToggleStatus/${id}`;
    return this.http.put(url, null)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  GetOrdersByUser(id: string|null): any{
    let url: string = `https://localhost:44374/api/Order/UserOrders/${id}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  GetOrdersItemsByOrder(id: string|null): any{
    let url: string = `https://localhost:44374/api/OrderItems/GetByOrder/${id}`;
    return this.http.get(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
