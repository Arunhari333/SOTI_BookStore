import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/books/components/add-book/add-book.component';
import { BookDataComponent } from './components/books/components/book-data/book-data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    BookDataComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
