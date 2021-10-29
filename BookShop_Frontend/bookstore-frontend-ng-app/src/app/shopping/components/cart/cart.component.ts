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
  }

  handleCartSave(): void {
    let orderItem: any[] = [];
    let qty: number;
    this.orders.forEach(order => {
      qty = +(<HTMLInputElement>document.getElementById(`qty${order.id}`)).value;
      orderItem.push({'id': order.id, 'qty': qty});
    });
    console.log(orderItem);
    this.shoppingService.saveOrderItems(orderItem)
      .subscribe((res: any) => {
        if(res && res.id){
          console.log(res);
        }
      })
  }

  deleteitem(orderItem: any[]) {
    this.shoppingService.deleteOrderItem()
        .subscribe((res: any) => {
          console.log(res);
        });
  }
}


