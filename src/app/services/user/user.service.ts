import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { singInModel } from 'src/app/model/singinmodel';
import { passwordForgetModel } from 'src/app/model/passwordforgetmodel';
import { addressModel } from 'src/app/model/addressmode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient) { }


  generateToken(credentials: any) {
    return this.http.post(this.baseUrl + "/token", credentials)
  }

  loginUser(token: any) {
    localStorage.setItem("token", token)
    this.getUserByToken().subscribe((n: any) => {
      localStorage.setItem("userId", n.data.id.toString());
      localStorage.setItem("userName", n.data.fullName);
    })
    return true
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == null || token === "") {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
    return true;
  }

  getToken() {
    return localStorage.getItem("token")
  }

  getUserByToken() {
    let token = localStorage.getItem("token")
    return this.http.get<any>(this.baseUrl + "/id/" + token)
  }

  signinUser(userInFo: singInModel) {
    return this.http.post<any>(this.baseUrl + '/signup', userInFo)
  }


  passwordForget(emailId: String) {
    return this.http.get<any>(this.baseUrl + '/forget-password/' + emailId)
  }

  passwordReset(inputToken: string, inputNewPassword: string) {
    return this.http.post<any>(this.baseUrl + '/reset-password', { "token": inputToken, "newPassword": inputNewPassword })
  }

  userAddress(addressInfo: addressModel) {
    let userId = localStorage.getItem("userId");
    return this.http.post<any>(this.baseUrl + '/address/' + userId, addressInfo)
  }

  userOrder(userid: string) {
    return this.http.get<any>(this.baseUrl + '/order/listoforders/' + userid)
  }

  getuserAddress(type: number) {
    let userId = localStorage.getItem("userId");
    return this.http.get<any>(this.baseUrl + '/address/' + userId + '/' + type)
  }


}
