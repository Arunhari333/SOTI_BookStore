import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/books/components/add-book/add-book.component';
import { BookDataComponent } from './components/books/components/book-data/book-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/components/add-category/add-category.component';
import { CategoryDataComponent } from './components/category/components/category-data/category-data.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/components/user-details/user-details.component';
import { UserOrderitemsComponent } from './components/users/components/user-orderitems/user-orderitems.component';
import { CouponsComponent } from './components/dicountCounpons/coupons/coupons.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    BookDataComponent,
    CategoryComponent,
    AddCategoryComponent,
    CategoryDataComponent,
    UsersComponent,
    UserDetailsComponent,
    UserOrderitemsComponent,
    CouponsComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
