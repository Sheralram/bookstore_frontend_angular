import { AuthIntercaptor } from './services/auth.interceptor';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BooklistComponent } from './components/book/booklist/booklist.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginRequestComponent } from './components/user/login-request/login-request.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { OrderGreetingComponent } from './components/book/order-greeting/order-greeting.component';
import { WishlistComponent } from './components/book/wishlist/wishlist.component';
import { PersonalDetailsComponent } from './components/user/personal-details/personal-details.component';
import { CartComponent } from './components/book/cart/cart.component';
import { MyordersComponent } from './components/user/myorders/myorders.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    LoginComponent,
    ForgetPasswordComponent,
    routingComponents,
    SigninComponent,
    ResetPasswordComponent,
    FooterComponent,
    BooklistComponent,
    OrderGreetingComponent,
    WishlistComponent,
    PersonalDetailsComponent,
    CartComponent,
    MyordersComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  providers: [UserService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercaptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
