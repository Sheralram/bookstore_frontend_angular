import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './components/user/signin/signin.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BooklistComponent } from './components/book/booklist/booklist.component';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { OrderGreetingComponent } from './components/book/order-greeting/order-greeting.component';
import { WishlistComponent } from './components/book/wishlist/wishlist.component';
import { PersonalDetailsComponent } from './components/user/personal-details/personal-details.component';
import { CartComponent } from './components/book/cart/cart.component';
import { PlaceOrderRequestComponent } from './components/book/place-order-request/place-order-request.component';
import { CustomerOrderSummaryComponent } from './components/book/customer-order-summary/customer-order-summary.component';
import { LoginRequestComponent } from './components/user/login-request/login-request.component';
import { MyordersComponent } from './components/user/myorders/myorders.component';
const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:"full"},
  { path: "login", component: LoginComponent  },
  { path: "signup", component: SigninComponent },
  { path: "reset-password/:token", component: ResetPasswordComponent },
  { path: "book-details/:bookId", component: BookDetailsComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "headersearch", component: HeaderSearchComponent },
  { path: "booklist", component: BooklistComponent, canActivate: [AuthGuard] },
  { path: "myorders", component: MyordersComponent, canActivate: [AuthGuard] },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "login-request", component: LoginRequestComponent },
  { path: "wishlist", component: WishlistComponent, canActivate: [AuthGuard] },
  { path: "personal-details", component: PersonalDetailsComponent, canActivate: [AuthGuard] },
  { path: "loginrequest", component: LoginRequestComponent },
  { path: "greeting", component: OrderGreetingComponent, canActivate: [AuthGuard] },
  { path: "mycart", component: CartComponent , canActivate: [AuthGuard]},
  { path: "place-order-request", component: PlaceOrderRequestComponent },
  { path: "customer-order-summary", component: CustomerOrderSummaryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HeaderComponent, ResetPasswordComponent, SigninComponent,
  HeaderSearchComponent, FooterComponent, BooklistComponent, ForgetPasswordComponent, BookDetailsComponent,
  LoginRequestComponent, PlaceOrderRequestComponent, CustomerOrderSummaryComponent]
