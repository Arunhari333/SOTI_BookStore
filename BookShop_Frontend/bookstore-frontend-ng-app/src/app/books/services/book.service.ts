import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http:HttpClient) { }

  //GET: Book-details   (books/book-details)
  getBooks(){
    return this.http.get('https://localhost:44374/api/Books')
    .pipe(map ((res:any)=>{
      console.log(res);
      return res;
    }));
  }



  getUserById(BookId:string |null):any{
    console.log(BookId);
    let userIdURL = `https://localhost:44374/api/Books/${BookId}`;
    return this.http.get(userIdURL)
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }
}
