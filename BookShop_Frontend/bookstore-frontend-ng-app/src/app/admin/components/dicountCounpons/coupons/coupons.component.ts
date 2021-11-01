import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CouponsService } from '../services/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  showForm: boolean = false;
  constructor(private couponsService: CouponsService) { }
  coupons:any[]=[];
  ngOnInit(): void {
    this.getCouponsFunction();
  }

 

  addCouponCodeForm = new FormGroup({
    couponCode: new FormControl(''),
    discount: new FormControl(''),
    isPercentage: new FormControl('')
  });

  ShowCouponForm(): any {
    this.showForm = true;
  }

  handleAddCoupon(): any {
    this.addCouponCodeForm.patchValue({
      isPercentage: 1
    });
    this.couponsService.addCoupon(this.addCouponCodeForm.value)
      .subscribe((res: any) => {
        console.log(res);
        alert("Coupon Code Added!!");
        this.getCouponsFunction();
      })
  }

  DeleteById(did:any):void
  {
    this.couponsService.deleteCoupon(did)
          .subscribe((res: any) => {
            console.log(res);
            this.getCouponsFunction();
          });
  }

  
  getCouponsFunction():any{
    this.couponsService.getCoupons()
      .subscribe((res: any) => {
        console.log('Coupons component TS get');
        console.log(res);
        this.coupons = res;
      });
  }
}
