import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './components/books/components/add-book/add-book.component';
import { BookDataComponent } from './components/books/components/book-data/book-data.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDataComponent } from './components/category/components/category-data/category-data.component';
import { AddCategoryComponent } from './components/category/components/add-category/add-category.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/components/user-details/user-details.component';
import { UserOrderitemsComponent } from './components/users/components/user-orderitems/user-orderitems.component';
import { CouponsComponent } from './components/dicountCounpons/coupons/coupons.component';

//configuring routes
const adminRoutes = [
  //{ path: '', component:  },
  { path: 'books', component: BooksComponent }, // admin/books
  { path: 'books/add-book', component: AddBookComponent },
  { path: 'books/:id', component: BookDataComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/add-category', component: AddCategoryComponent },
  { path: 'category/:id', component: CategoryDataComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users/orders/:id', component: UserOrderitemsComponent },
  { path: 'coupons', component: CouponsComponent }
]
//register routes
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
