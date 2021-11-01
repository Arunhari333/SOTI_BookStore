import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: any[]=[];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getCategories()
      .subscribe((res: any) => {
        console.log(res);
        this.categories = res;
      });
  }

  logout(){
    localStorage.removeItem('authtoken');
  }
  // login(){
  //   localStorage.getItem('authtoken');
  // }
  // signup(){
  //   localStorage.getItem('authtoken');
  // }

}