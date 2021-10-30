import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ResetPwComponent } from './auth/components/reset-pw/reset-pw.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedBooksComponent } from './home/featured-books/featured-books.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { SearchBooksComponent } from './books/components/list-books/components/search-books/search-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    BookDetailsComponent,
    LoginComponent,
    SignupComponent,
    ResetPwComponent,
    CartComponent,
    CheckoutComponent,
    FeaturedBooksComponent,
    ListBooksComponent,
    SearchBooksComponent,
    // AuthInterceptor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
