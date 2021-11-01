import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(formData:any):any{
    return this.http.post('https://localhost:44374/api/Users/login',formData)
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }

  isAuth()
  {
    if(localStorage.getItem('authToken')){
      return true;
    }
    else{
      return false;
    }
  }
}
