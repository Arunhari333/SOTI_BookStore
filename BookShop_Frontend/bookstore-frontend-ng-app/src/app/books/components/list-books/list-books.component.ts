import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  books: any[] = [];
  
  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((res:any)=>{
      console.log(res);
      this.books=res;
    });
  }


  searchBookByName(BookName: string) {
    this.bookService.getBookByName(BookName)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
  }
  searchBookByAuthor(BookAuthor: string)
  {
    this.bookService.getBookByAuthor(BookAuthor)
    .subscribe((res: any) => {
      console.log(res);
      this.books = res;
    });
  }
  searchBookByISBN(BookISBN: number) {
    this.bookService.getBookByISBN(BookISBN)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
  }
  searchBookByCategory(BookCategory: number) {
    this.bookService.getBookByCategory(BookCategory)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
  }
 
}
