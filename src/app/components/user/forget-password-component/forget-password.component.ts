import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';
import { passwordForgetModel } from 'src/app/model/passwordforgetmodel';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  // passwordforgetmodel: passwordForgetModel = {

  //   emailId: ''
  // }

  public emailId: String = '';

  constructor(private service: UserService, private routerlink: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    console.log(form)
    this.emailId = form.value.emailId;


    this.service.passwordForget(this.emailId).subscribe(
      n => {
        console.log(n);
        this.routerlink.navigate(["/login"])
      }
    )
  }

}
