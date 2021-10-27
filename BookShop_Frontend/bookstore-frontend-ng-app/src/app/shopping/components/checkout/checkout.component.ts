import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orders :any = [
    {
      "name": "maths",
      "url": "images.jfif",
      "price": 250,
      "qty": 2,
      "id": 4
    },
    {
      "name": "Science",
      "url": "images.jfif",
      "price": 400,
      "qty": 1,
      "id": 5
    }
  ]

  totalOrders=this.orders.length;
  totalCost=0;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    for(let i=0;i<this.orders.length;i++)
    {
      this.totalCost +=(this.orders[i].qty * this.orders[i].price) 
    }

    this.shoppingService.getOrderItems()
      .subscribe((res: any) => {
        console.log(res);
        //this.users = res;
      })
  }

}
