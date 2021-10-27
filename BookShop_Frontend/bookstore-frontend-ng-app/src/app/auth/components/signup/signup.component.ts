import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // handleAddUser(): void {
  //   console.log('Submitting');
  //   console.log(this.addUserForm.value)
  //   this.userService.createUser(this.addUserForm.value)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       if(res && res.id == 11){
  //         this.isSaved = true;
  //       }
  //     })
  // }

}
