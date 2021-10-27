import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSaved=false;
  addUserForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    passWord : new FormControl('',Validators.required),
    eMail : new FormControl('', [Validators.required, Validators.email])
  });


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  handleAddUser(): void {
    console.log('Submitting');
    console.log(this.addUserForm.value)
    this.userService.createUser(this.addUserForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if(res && res.id == 11){
          this.isSaved = true;
        }
      })
  }

}
