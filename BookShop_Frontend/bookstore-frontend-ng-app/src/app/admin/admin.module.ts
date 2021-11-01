import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/books/components/add-book/add-book.component';
import { BookDataComponent } from './components/books/components/book-data/book-data.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/components/add-category/add-category.component';
import { CategoryDataComponent } from './components/category/components/category-data/category-data.component';



@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    BookDataComponent,
    CategoryComponent,
    AddCategoryComponent,
    CategoryDataComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
