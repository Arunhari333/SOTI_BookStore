import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {

  booksData: any[] = [];
  @Output() searchResult = new EventEmitter();

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  searchBookByName() {
    let bookName: string;
    bookName = (<HTMLInputElement>document.getElementById(`bookname`)).value;
    
    this.bookService.getBookByName(bookName)
      .subscribe((res: any) => {
        console.log(res);
        this.booksData = res;
        this.searchResult.emit(this.booksData);
      });
    }

  searchBookByAuthor()
  {
    let bookAuthor: string;
    bookAuthor = (<HTMLInputElement>document.getElementById(`bookauthor`)).value;
    console.log(bookAuthor);
    this.bookService.getBookByAuthor(bookAuthor)
    .subscribe((res: any) => {
      console.log(res);
      this.booksData = res;
      this.searchResult.emit(this.booksData);
    });
  }

  searchBookByISBN() {
    let bookISBN: number;
    bookISBN = +(<HTMLInputElement>document.getElementById(`bookISBN`)).value;
    this.bookService.getBookByISBN(bookISBN)
      .subscribe((res: any) => {
        console.log(res);
        this.booksData = res;
        this.searchResult.emit(this.booksData);
    });
  }

  searchBookByCategory() {
    let bookCategory: string;
    bookCategory = (<HTMLInputElement>document.getElementById(`bookcategory`)).value;
    this.bookService.getBookByCategory(bookCategory)
      .subscribe((res: any) => {
        console.log(res);
        this.booksData = res;
        this.searchResult.emit(this.booksData);
    });
  }

}
