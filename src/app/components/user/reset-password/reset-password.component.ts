import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { passwordForgetModel } from 'src/app/model/passwordforgetmodel';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token: any = null;
  newPassword: any = null;


  constructor(public activedRoute: ActivatedRoute, private userService: UserService, private routerlink: Router) { }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe(
      (m: ParamMap) => {
        this.token = m.get('token')
        console.log(this.token);
      }
    )
  }

  onSumbit() {
    this.userService.passwordReset(this.token, this.newPassword).subscribe(

    )
    console.log(this.newPassword);

  }

}
