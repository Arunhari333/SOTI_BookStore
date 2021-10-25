import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  torders :any = [
    {
      "bookname": "maths",
      "url": "images.jfif",
      "price": 250,
      "qty": 2,
      "id": 4
    },
    {
      "bookname": "Science",
      "url": "images.jfif",
      "price": 400,
      "qty": 1,
      "id": 5
    }
  ]
   total!: number;
  constructor() {}

  ngOnInit() {
    this.total =0;
    for(let i=0; i< this.torders.length;i++){
      this.total = this.total + (this.torders[i].price * this.torders[i].qty)
    }
    console.log(this.total);
  }
  
  
}


