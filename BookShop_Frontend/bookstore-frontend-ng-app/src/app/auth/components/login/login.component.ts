import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  handleLoginSubmit(formData:any):any{
    console.log('Logging in...');
    console.log(formData.value);
    this.authService.login(formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      alert('Logged In');
      if(res&&res.token)
      {
        console.log(res.token);
        localStorage.setItem('authToken',res.token);
        this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['returnURL']);
      }
    });

    }
  }
