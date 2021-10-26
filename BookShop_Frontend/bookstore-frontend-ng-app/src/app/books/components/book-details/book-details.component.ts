import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService:BookService, private route:ActivatedRoute) { }
  bookData:any;
  ngOnInit(): void {

    console.log('Inside ngOnInit');

    let id=this.route.snapshot.paramMap.get('id');

    this.bookService.getUserById(id)
    .subscribe((res:any)=>{
      console.log(res);
      this.bookData=res;
    })
  }

}
