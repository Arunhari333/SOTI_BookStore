import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataStoreService } from '../services/data-store.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: any[]=[];

  isloggedIn: any;
  isAdmin: any;

  constructor(private headerService: HeaderService, private router: Router, 
    private dataStore:DataStoreService, private location:Location) {
      location.onUrlChange(url => {
        this.isloggedIn = localStorage.getItem('authToken');
        this.dataStore.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
      });
     }

  ngOnInit(): void {
    this.dataStore.isAdmin.subscribe(isAdmin => {
      console.log(isAdmin);
      this.isAdmin = isAdmin;
    });
    this.headerService.getCategories()
      .subscribe((res: any) => {
        console.log(res);
        this.categories = res;
      });
      this.isloggedIn = localStorage.getItem('authToken');
      this.dataStore.categoryId.subscribe(id => console.log(id));
  }

  handleCategoryClick(id: string){
    this.dataStore.changeCategoryId(id);
  }

  logout(){
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
    //setTimeout(function(){ window.location.reload(); }, 1000);
  }

}