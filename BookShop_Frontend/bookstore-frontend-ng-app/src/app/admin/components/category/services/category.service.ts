import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get('https://localhost:44374/api/Categories')
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getCategoryById(id:any){
    let url = `https://localhost:44374/api/Categories/${id}`
    return this.http.get(url)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  createCategory(formData: any){
    let url: string = 'https://localhost:44374/api/Categories';
    console.log(formData);
    return this.http.post(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateCategory(id: string|null, formData: any){
    let url: string = `https://localhost:44374/api/Categories/${id}`;
    console.log(formData);
    return this.http.put(url, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  deleteCategory(id: string|null){
    let url: string = `https://localhost:44374/api/Categories/${id}`;
    return this.http.delete(url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
