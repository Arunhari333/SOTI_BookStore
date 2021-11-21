import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';
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
    private dataStore:DataStoreService, private shoppingService: ShoppingService) { }

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
    this.shoppingService.getOrderItems().subscribe((res: any) => {
      console.log(res);
      this.dataStore.addOrderItems(res);
    });
  }

  handleCategoryClick(id: string){
    this.dataStore.changeCategoryId(id);
  }
  
}