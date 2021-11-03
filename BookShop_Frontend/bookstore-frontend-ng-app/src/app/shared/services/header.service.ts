import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  //GET: Categories   ( api/Categories)
  getCategories() {
    return this.http.get('https://localhost:44374/api/Categories')
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  logoutUser(){
    return this.http.put('https://localhost:44374/api/Users/logout', null)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

}
