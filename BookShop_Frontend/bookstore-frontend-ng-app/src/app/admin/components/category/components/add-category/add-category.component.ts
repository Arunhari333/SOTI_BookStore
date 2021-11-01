import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  isSaved: boolean = false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  handleAddcategory(formData:any):any{
    console.log(formData.value);
    this.categoryService.createCategory(formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.isSaved = true;
      }
    });
  }

}
