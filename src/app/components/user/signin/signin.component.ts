import { Component, OnInit } from '@angular/core';
import { singInModel } from 'src/app/model/singinmodel';
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userSignin: singInModel = {

    fullName: '',
    emailId: '',
    password: '',
    phoneNumber: 0

  }

  constructor(private service: UserService, private routerlink: Router) { }

  ngOnInit(): void {
  }


  onSumbit(form: any) {
    console.log(form)
    this.userSignin.fullName = form.value.fullName;
    this.userSignin.emailId = form.value.emailId;
    this.userSignin.password = form.value.password;
    this.userSignin.phoneNumber = form.value.phoneNumber;


    this.service.signinUser(this.userSignin).subscribe(
      n => {
        console.log(n);
        this.routerlink.navigate(["/login"])
      }

    )
  }

}
