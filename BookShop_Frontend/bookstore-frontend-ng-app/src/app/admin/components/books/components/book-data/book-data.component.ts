import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/books/services/book.service';
import { AdminBookService } from '../../services/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent implements OnInit {

  bookData: any;
  isPresent: boolean = false;
  isSaved: boolean = false;
  
  constructor(private bookService:BookService, private route:ActivatedRoute, 
    private adminBookService: AdminBookService, private router: Router) { }
  
  ngOnInit(): void {
    this.getBookData();
  }

  getBookData(){
    let id:string|null = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id)
    .subscribe((res:any)=>{
      console.log(res);
      this.bookData=res;
      this.isPresent = true
    });
  }

  handleUpdateBook(formData:any):any{
    console.log(formData.value);
    let id:string|null = this.route.snapshot.paramMap.get('id');
    this.adminBookService.updateBook(id, formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.isSaved = true;
        this.getBookData();
      }
    });
  }

  handleDeleteBook():any{
    let id:string|null = this.route.snapshot.paramMap.get('id');
    this.adminBookService.deleteBook(id)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.router.navigate(['admin/books']);
      }
    });
  }
}