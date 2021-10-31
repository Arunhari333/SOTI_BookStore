import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { RouterModule } from '@angular/router';

//configuring routes
const adminRoutes = [
  //{ path: '', component:  },
  { path: 'books', component: BooksComponent } // admin/books
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
