import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  books :any[] =[];
  
  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((res:any)=>{
      console.log(res);
      this.books=res;
    });
  }

}
