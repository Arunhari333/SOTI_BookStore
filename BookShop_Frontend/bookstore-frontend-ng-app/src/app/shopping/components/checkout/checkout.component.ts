import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
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

  addAddressForm = new FormGroup({
    address: new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    zipcode : new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  totalOrders=this.orders.length;
  totalCost=0;
  isSaved: boolean = false;

  shippingAddresses: any = [
    {
      "address": "Poorna Lane",
      "city": "Tripunithura",
      "state": "Kerala",
      "zipcode": "682301",
      "country": "India"
    },
    {
      "address": "Martha Halli",
      "city": "Bangalore",
      "state": "Karnataka",
      "zipcode": "782602",
      "country": "India"
    }
  ]

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

    this.shoppingService.getShippingAddress()
      .subscribe((res: any) => {
        console.log(res);
        //this.users = res;
      })
  }

  handleAddAddress(): void {
    console.log('Submitting');
    console.log(this.addAddressForm.value)
    this.shoppingService.createShippingAddress(this.addAddressForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if(res.id){
          this.isSaved = true;
          this.addAddressForm.reset();
        }
      })
  }
}
