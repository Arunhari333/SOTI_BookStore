import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  tempTotal:any;
  orders :any = [];
    getOrdersI():any{
      this.shoppingService.getOrderItems()
        .subscribe((res: any) => {
          console.log(res);
          this.orders = res;
          this.calculateTotal();
        });
    }
    total!: number;
    calculateTotal() {
      this.total = 0;
      for(let i=0; i< this.orders.length;i++){
        console.log(this.orders[i].Book.bookPrice);
        this.total = this.total + (this.orders[i].Book.bookPrice * this.orders[i].qty);
        this.tempTotal=this.total;
      }
    }

  addAddressForm = new FormGroup({
    address: new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    zipcode : new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  totalOrders=this.orders.length;
  
  isSaved: boolean = false;
  isPresent: boolean = false;
  isnewAddress : boolean = false;


  shippingAddresses : any[] =[];


  constructor(private shoppingService: ShoppingService,private route:Router) { }

  ngOnInit(): void {

    this.getOrdersI();

    this.shoppingService.getOrderItems()
      .subscribe((res: any) => {
        console.log(res);
        //this.users = res;
      })

    this.shoppingService.getShippingAddress()
      .subscribe((res: any) => {
        console.log(res);
        if(res.length==0)
        {
          console.log('Empty');
          this.isPresent=false;
        }
        else{
          this.isPresent=true
          this.shippingAddresses = res;
        }
        
      })
  }

  handleAddAddress(): void {
    console.log(this.addAddressForm.value)
    this.shoppingService.createShippingAddress(this.addAddressForm.value)
      .subscribe((res: any) => {
        this.shoppingService.createOrder(res.id, this.total)
        .subscribe((res1:any)=>{
          console.log(res1);
        });
        console.log(res);
        if(res.id){
          this.isSaved = true;
          this.addAddressForm.reset();
        }
        alert('Order is Successfully Places');
      this.route.navigate(['']);
      });
  }

  GetId(id:any):void{
    console.log(id);
    this.shoppingService.createOrder(id, this.total)
    .subscribe((res:any)=>{
      console.log(res);
    })
  }

  DisplayNewAddressForm() : any{
    this.isnewAddress = true;
    this.isPresent=false;
  }
  isDiscount:boolean=false;
  coupon : any = "";
  caldiscount()
  {
    console.log(this.coupon);
    console.log("Calculating..");
    this.shoppingService.checkCoupon(this.coupon)
    .subscribe((res:any)=>{
      console.log(res);
      if(res==null)
      {
        alert("Coupon Invalid!!");
      }
      else{
        this.total = this.total-((this.total/100)*res.discount);
        console.log(this.total);
        this.isDiscount=true;
      }
      
    })
  }
}
