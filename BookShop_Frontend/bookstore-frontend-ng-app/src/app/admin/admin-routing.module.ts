import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './components/books/components/add-book/add-book.component';
import { BookDataComponent } from './components/books/components/book-data/book-data.component';

//configuring routes
const adminRoutes = [
  //{ path: '', component:  },
  { path: 'books', component: BooksComponent }, // admin/books
  { path: 'books/add-book', component: AddBookComponent },
  { path: 'books/:id', component: BookDataComponent },
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
