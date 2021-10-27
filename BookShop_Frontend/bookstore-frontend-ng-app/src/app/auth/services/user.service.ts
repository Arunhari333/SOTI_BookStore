import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: any){
    let url: string = 'https://localhost:44374/api/Users';
    console.log(formData);
    return this.http.post(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
