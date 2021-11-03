import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.scss']
})
export class FeaturedBooksComponent implements OnInit {

  books: any;
  
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((res:any)=>{
      console.log(res);
      this.books=res;
    });
  }

}
