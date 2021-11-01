import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  category:any[]=[];
  ngOnInit(): void {
    this.categoryService.getCategory()
    .subscribe((res:any)=>{
      console.log(res);
      this.category=res;
    })
  }

}
