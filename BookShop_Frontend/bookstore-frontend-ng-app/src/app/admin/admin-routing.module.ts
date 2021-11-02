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
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../shared/guards/admin.guard';

//configuring routes
const adminRoutes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin/books', component: BooksComponent, canActivate: [AdminGuard] },
  { path: 'admin/books/add-book', component: AddBookComponent, canActivate: [AdminGuard] },
  { path: 'admin/books/:id', component: BookDataComponent, canActivate: [AdminGuard] },
  { path: 'admin/category', component: CategoryComponent, canActivate: [AdminGuard] },
  { path: 'admin/category/add-category', component: AddCategoryComponent, canActivate: [AdminGuard] },
  { path: 'admin/category/:id', component: CategoryDataComponent, canActivate: [AdminGuard] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/users/:id', component: UserDetailsComponent, canActivate: [AdminGuard] },
  { path: 'admin/users/orders/:id', component: UserOrderitemsComponent, canActivate: [AdminGuard] },
  { path: 'admin/coupons', component: CouponsComponent, canActivate: [AdminGuard] }
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
