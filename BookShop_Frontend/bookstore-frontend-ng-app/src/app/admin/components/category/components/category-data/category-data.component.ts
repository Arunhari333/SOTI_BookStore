import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrls: ['./category-data.component.scss']
})
export class CategoryDataComponent implements OnInit {
  CategoryData:any;
  isPresent: boolean = false;
  isSaved: boolean = false;


  constructor(private route:ActivatedRoute,private categoryService:CategoryService, private router:Router ) { }

  ngOnInit(): void {
    this.getCategoryData();
    
  }

  getCategoryData(){
    let id:string|null = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(id)
    .subscribe((res:any)=>{
      console.log(res);
      this.CategoryData=res;
    });}

  handleUpdateBook(formData:any):any{
    console.log(formData.value);
    let id:string|null = this.route.snapshot.paramMap.get('id');
    this.categoryService.updateCategory(id, formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.isSaved = true;
        this.getCategoryData();
      }
    });
  }

  handleDeleteBook():any{
    let id:string|null = this.route.snapshot.paramMap.get('id');
    this.categoryService.deleteCategory(id)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.router.navigate(['admin/category']);
      }
    });
  }

}
