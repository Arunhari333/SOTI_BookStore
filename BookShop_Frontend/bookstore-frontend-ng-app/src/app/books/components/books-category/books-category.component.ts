import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/shared/services/data-store.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.scss']
})
export class BooksCategoryComponent implements OnInit {

  constructor(private bookService:BookService, private route:ActivatedRoute, 
    private dataStore:DataStoreService, private location:Location) {
      location.onUrlChange(url => {
        this.getCategoryBookData();
      });
     }

  books: any[] = [];
  id: string = '1';
  
  ngOnInit(): void {
    this.getCategoryBookData();
  }

  getCategoryBookData(){
    this.dataStore.categoryId.subscribe(id => this.id = id);

    this.bookService.getBooksByCategoryId(this.id)
    .subscribe((res:any)=>{
      console.log(res);
      this.books=res;
    });
  }
}
