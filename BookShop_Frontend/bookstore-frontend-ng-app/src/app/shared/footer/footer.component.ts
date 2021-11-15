import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: any[]=[];
  isAdmin: any;
  isloggedIn: any;
  constructor(private router: Router, private headerService:HeaderService,
    private dataStore:DataStoreService) { }

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
  
}