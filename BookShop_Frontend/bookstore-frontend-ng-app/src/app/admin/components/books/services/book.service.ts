import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {

  constructor(private http: HttpClient) { }

  createBook(formData: any){
    let url: string = 'https://localhost:44374/api/Books';
    console.log(formData);
    return this.http.post(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateBook(id: string|null, formData: any){
    if(id == null){
      return null;
    }
    let url: string = `https://localhost:44374/api/Books/${id}`;
    console.log(formData);
    return this.http.put(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
