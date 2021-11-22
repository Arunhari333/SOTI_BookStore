import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStoreService } from 'src/app/shared/services/data-store.service';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
 
  constructor(private bookService:BookService, private route:ActivatedRoute, private router:Router, 
    private dataStore: DataStoreService, private shoppingService: ShoppingService) { }

  bookData:any;
  orderData:any[] = [];
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

    this.dataStore.orderItems.subscribe((oItems) => {
      this.orderData = oItems;
    });
  }

  checkBook(): boolean {
    if(this.orderData.filter(order => order.bookId == this.id).length == 0)
      return false
    return true
  }

  handleAddToWishlist(bookId: number): void {
    let item = {
      "bookId": bookId
    };
    console.log(item);
    this.bookService.createWishlistItems(item)
      .subscribe((res: any) => {
        if (res && res.id) {
          console.log(res);
          this.router.navigate(['wishlist']);
        }
      })
  }

  addToCartSubmit():void{
    console.log(this.qty);
    if(this.checkBook()){
      this.orderData.map(order => {
        if(order.bookId == this.id)
          order.qty += this.qty;
      });
      this.dataStore.addOrderItems(this.orderData);
      let partialOrderItems:any[] = [];
      this.orderData.map(order => {
        partialOrderItems.push({'id': order.id, 'qty': order.qty});
      });
      console.log(partialOrderItems);
      this.shoppingService.saveOrderItems(partialOrderItems)
        .subscribe((res: any) => {
          if(res && res.id){
            console.log(res);
          }
        })
    }
    else{
      this.bookService.addToCart(this.qty,this.id)
      .subscribe((res:any)=>{
        console.log(res);
        this.dataStore.updateOrderItems(res);
      });
    }
  }

}
