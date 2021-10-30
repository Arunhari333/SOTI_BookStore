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

  //handleCartSave(): void {
  //  let orderItem: any[] = [];
  //  let qty: number;
  //  this.orders.forEach(order => {
  //    qty = +(<HTMLInputElement>document.getElementById(`qty${order.id}`)).value;
  //    orderItem.push({ 'id': order.id, 'qty': qty });
  //  });
  //  console.log(orderItem);
  //  this.shoppingService.saveOrderItems(orderItem)
  //    .subscribe((res: any) => {
  //      if (res && res.id) {
  //        console.log(res);
  //      }
  //    })
  //}
  searchBookByName() {
  
    let bookName: string;
    bookName = (<HTMLInputElement>document.getElementById(`bookname`)).value;
      
    this.bookService.getBookByName(bookName)
      .subscribe((res: any) => {
        console.log(res);
        
      });
    }

  searchBookByAuthor()
  {
    let bookAuthor: string;
    bookAuthor = (<HTMLInputElement>document.getElementById(`bookauthor`)).value;
    this.bookService.getBookByAuthor(bookAuthor)
    .subscribe((res: any) => {
      console.log(res);
      this.books = res;
    });
  }
  searchBookByISBN() {
    let bookISBN: number;
    bookISBN = +(<HTMLInputElement>document.getElementById(`bookISBN`)).value;
    this.bookService.getBookByISBN(bookISBN)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
  }
  searchBookByCategory() {
    let bookCategory: number;
    bookCategory = +(<HTMLInputElement>document.getElementById(`bookcategory`)).value;
    this.bookService.getBookByCategory(bookCategory)
      .subscribe((res: any) => {
        console.log(res);
        this.books = res;
      });
  }
 
}
