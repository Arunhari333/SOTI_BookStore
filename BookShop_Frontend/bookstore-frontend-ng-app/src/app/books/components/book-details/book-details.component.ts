import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  id:any;
 
  qty:any = 1;
  
  num:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(this.id)
    .subscribe((res:any)=>{
      console.log(res);
      this.bookData=res;
    });
  }

  handleAddToWishlist(bookId: number): void {
    let item = {
      //"userId": 2,
      "bookId": bookId
    };
    console.log('Submitting');
    console.log(item);
    this.bookService.createWishlistItems(item)
      .subscribe((res: any) => {
        if (res && res.id) {
          console.log(res);
        }
      })
  }
  addToCartSubmit():void{
    console.log(this.qty);
    this.bookService.addToCart(this.qty,this.id)
    .subscribe((res:any)=>{
      console.log(res);
    });
  }

}
