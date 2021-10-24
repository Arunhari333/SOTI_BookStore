import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { FeaturedBooksComponent } from './home/featured-books/featured-books.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './shopping/components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup' ,component:SignupComponent},
  { path: 'books' ,component:FeaturedBooksComponent},
  { path: 'books/:bookid' ,component:BookDetailsComponent},
  { path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
