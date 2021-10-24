import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './shopping/components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup' ,component:SignupComponent},
  { path: 'bookslist' ,component:ListBooksComponent},
  { path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
