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

  getBookById(BookId:string |null):any{
    console.log(BookId);
    let bookIdURL = `https://localhost:44374/api/Books/${BookId}`;
    return this.http.get(bookIdURL)
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }

  getBookByName(BookName: string | null): any {
    console.log(BookName);
    let bookNameURL = `https://localhost:44374/api/Books/SearchByName/${BookName}`;
    return this.http.get(bookNameURL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getBookByAuthor(BookAuthor: string | null): any {
    console.log(BookAuthor);
    let bookAuthorURL = `https://localhost:44374/api/Books/SearchByAuthor/${BookAuthor}`;
    return this.http.get(bookAuthorURL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getBookByISBN(BookISBN: number | null): any {
    console.log(BookISBN);
    let bookISBNURL = `https://localhost:44374/api/Books/SearchByISBN/${BookISBN}`;
    return this.http.get(bookISBNURL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getBookByCategory(BookCategory: number | null): any {
    console.log(BookCategory);
    let bookCategoryURL = `https://localhost:44374/api/Books/SearchByCategoryId/${BookCategory}`;
    return this.http.get(bookCategoryURL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  createWishlistItems(item: any) {
   
    let wishlistURL = `https://localhost:44374/api/Wishlist`;
    return this.http.get(wishlistURL, item)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
