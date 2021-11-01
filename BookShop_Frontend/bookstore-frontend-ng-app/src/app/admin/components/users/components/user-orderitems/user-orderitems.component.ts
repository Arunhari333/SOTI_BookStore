import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-orderitems',
  templateUrl: './user-orderitems.component.html',
  styleUrls: ['./user-orderitems.component.scss']
})
export class UserOrderitemsComponent implements OnInit {

  orderItems: any;
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderItemsData();
  }

  getOrderItemsData(){
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.GetOrdersItemsByOrder(id)
      .subscribe((res: any) => {
        console.log(res);
        this.orderItems = res;
      })
  }

}
