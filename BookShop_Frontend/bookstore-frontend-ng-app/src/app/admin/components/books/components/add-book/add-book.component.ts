import { Component, OnInit } from '@angular/core';
import { AdminBookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  isSaved: boolean = false;
  
  constructor(private bookService: AdminBookService) { }

  ngOnInit(): void {
  }

  handleAddBook(formData:any):any{
    console.log(formData.value);
    this.bookService.createBook(formData.value)
    .subscribe((res:any)=>{
      console.log(res);
      if(res && res.id)
      {
        this.isSaved = true;
      }
    });
  }

}
