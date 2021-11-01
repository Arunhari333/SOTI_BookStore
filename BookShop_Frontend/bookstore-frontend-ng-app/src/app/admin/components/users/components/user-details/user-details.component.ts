import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:any;
  userOrders:any;
  showForm:boolean = false;

  addCouponCodeForm= new FormGroup({
    couponCode : new FormControl(''),
    discount : new FormControl(''),
    isPercentage : new FormControl('')
  });

  


  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserData();
    this.getUserOrdersData();
  }

  getUserData(){
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
      })
  }

  handleToggleUserStatus(){
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.toggleUserStatus(id)
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
        this.getUserData();
    })
  }

  getUserOrdersData(){
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.GetOrdersByUser(id)
      .subscribe((res: any) => {
        console.log(res);
        this.userOrders = res;
      })
  }

  ShowCouponForm() : any{
    this.showForm = true;
    this.getRandomString()
  }

  handleAddCoupon():any{
    this.addCouponCodeForm.patchValue({
      couponCode: this.couponCode, 
      isPercentage:1
    });
    this.userService.addCoupon(this.addCouponCodeForm.value)
      .subscribe((res: any) => {
        console.log(res);
        alert("Coupon Code Added!!");
      })
  }

  couponCode:any="";
  getRandomString() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 6; i++ ) {
      this.couponCode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    console.log(this.couponCode);
    return this.couponCode;
}
}
