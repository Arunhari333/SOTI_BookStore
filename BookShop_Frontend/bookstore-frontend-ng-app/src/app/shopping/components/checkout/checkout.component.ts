import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<this.orders.length;i++)
    {
      this.totalCost +=(this.orders[i].qty * this.orders[i].price) 
    }
  }

}
