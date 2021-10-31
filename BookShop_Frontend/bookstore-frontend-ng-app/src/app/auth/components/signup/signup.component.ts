import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  consoleid:any;
  isSaved=false;
  addUserForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    passWord : new FormControl('',Validators.required),
    eMail : new FormControl('', [Validators.required, Validators.email])
  });


  constructor(private userService: UserService, private route:Router) { }

  ngOnInit(): void {
  }
 
  handleAddUser(): void {
    console.log('Submitting');
    console.log(this.addUserForm.value)
    this.userService.createUser(this.addUserForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.consoleid=res.id;
        console.log(this.consoleid);
        if(res && res.id){
          this.isSaved = true;
          this.addUserForm.reset();
          this.route.navigate(['login']);
        }
      })
  }

}
