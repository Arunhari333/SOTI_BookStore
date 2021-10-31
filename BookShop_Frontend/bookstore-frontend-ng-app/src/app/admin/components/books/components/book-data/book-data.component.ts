import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/books/services/book.service';
import { AdminBookService } from '../../services/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent implements OnInit {

  bookData:any;
  isSaved: boolean = false;
  
  constructor(private bookService:BookService, private route:ActivatedRoute, private adminBookService: AdminBookService) { }
  
  ngOnInit(): void {

    console.log('Inside ngOnInit');

    let id:string|null = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id)
    .subscribe((res:any)=>{
      console.log(res);
      this.bookData=res;
    });
  }

  handleUpdateBook(formData:any):any{
    console.log(formData.value);
    this.adminBookService.createBook(formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.isSaved = true;
      }
    });
  }
}