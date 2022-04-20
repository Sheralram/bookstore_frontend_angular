import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential = {
    emailId: "",
    password: ""
  }

  wrongCredential: boolean = false

  constructor(private userService: UserService,
              private routerlink: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.credential)
    this.userService.generateToken(this.credential).subscribe((response: any) => {
      console.log(response.token)
      this.userService.loginUser(response.token)
      this.routerlink.navigate(["/booklist"])
    },
      error => { console.log(error); this.wrongCredential = true })
  }
}
