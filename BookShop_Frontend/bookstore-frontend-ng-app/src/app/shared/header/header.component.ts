import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: any[]=[];

  isloggedIn: any;

  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void {
    this.headerService.getCategories()
      .subscribe((res: any) => {
        console.log(res);
        this.categories = res;
      });
      this.isloggedIn = localStorage.getItem('authToken');
  }

  logout(){
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
    window.location.reload();
  }
  // login(){
  //   localStorage.getItem('authtoken');
  // }
  // signup(){
  //   localStorage.getItem('authtoken');
  // }

}