import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // orders :any = [
  //   {
  //     "bookname": "maths",
  //     "url": "images.jfif",
  //     "price": 250,
  //     "qty": 2,
  //     "id": 4
  //   },
  //   {
  //     "bookname": "Science",
  //     "url": "images.jfif",
  //     "price": 400,
  //     "qty": 1,
  //     "id": 5
  //   }
  // ]
  orders: any[] = []

  total!: number;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService.getOrderItems()
      .subscribe((res: any) => {
        console.log(res);
        this.orders = res;
        this.calculateTotal();
      });
  }
  
  calculateTotal() {
    this.total = 0;
    for(let i=0; i< this.orders.length;i++){
      this.total = this.total + (this.orders[i].Book.bookPrice * this.orders[i].qty)
    }
    console.log(this.total);
  }

  // handleCartSave(): void {
  //   console.log('Submitting');
  //   console.log(this.editCartForm.value)
  //   this.shoppingService.saveOrderItems(this.editCartForm.value)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       if(res && res.id == 11){
  //         this.isSaved = true;
  //       }
  //     })
  // }

  deleteitem(orderItem: any[]) {
    this.shoppingService.deleteOrderItem()
        .subscribe((res: any) => {
          console.log(res);
        });
  }
}


