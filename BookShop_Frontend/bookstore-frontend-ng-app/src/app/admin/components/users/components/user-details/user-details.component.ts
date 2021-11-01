import { Component, OnInit } from '@angular/core';
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
}
