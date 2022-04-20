import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {

    return this.http.get<any>(this.baseUrl + "/book/")
  }

  getBookById(n: number) {
    return this.http.get<any>(this.baseUrl + "/book/" + n)
  }

  getCartlist() {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + "/cart/" + userId)
  }

  addToCart(bookId: number, quantity: number) {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + "/cart/" + `${userId}/${bookId}/${quantity}`)
  }

  removeFromCart(bookId: number, quantity: number) {
    let userId = localStorage.getItem("userId");
    return this.http.delete<any>(this.baseUrl + "/cart/" + `${userId}/${bookId}/${quantity}`)
  }

  placeOrder() {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + "/order/placeorder/" + userId)
  }

  addToWishList(bookId: number) {
    let userId = localStorage.getItem("userId");
    console.log(this.baseUrl + "/wishlist/" + `${userId}/${bookId}`);
    return this.http.get<any>(this.baseUrl + "/wishlist/" + `${userId}/${bookId}`)
  }

  getWishList(){
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl+"/wishlist/"+userId)
  }

  removeFromWishList(bookId: number) {
    let userId = localStorage.getItem("userId");
    return this.http.delete<any>(this.baseUrl + "/wishlist/" + `${userId}/${bookId}`)
  }

  searchBook(bookName: String){
    return this.http.get<any>(this.baseUrl+"/book/search/"+bookName)
  }
}
