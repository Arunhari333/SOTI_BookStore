import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  books: any[] = [];
  
  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((res:any)=>{
      console.log(res);
      this.books=res;
    });
  }

  handleSearchResult(e: any){
    this.books = e;
  }
}