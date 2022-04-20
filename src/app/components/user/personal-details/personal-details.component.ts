import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  addressmodel = {
    name: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    landmark: '',
    type: 1
  }

  usermodel = {
    fullName: '',
    emailId: '',
    password: '',
    phoneNumber: 0
  }

  public type = [true, false, false];

  token = localStorage.getItem("token")
  newPassword: any = null;

  titleService: any;
  display = false;
  hidden = true;
  display1 = false;
  hidden1 = true;

  constructor(private service: UserService,) { }

  ngOnInit(): void {
    this.getUserAddress();
    this.getUserPersonDetails();

  }

  onClickClear() {
    sessionStorage.clear();
  }
  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }
  toggle() {
    this.display = !this.display;

  }

  toggle1() {
    this.display1 = !this.display1;

  }
  onClickAddMyAddress() {
    console.log(this.addressmodel)
    this.service.userAddress(this.addressmodel).subscribe(
      n => {
        console.log(n);
      }
    )
  }

  getUserAddress() {
    this.service.getuserAddress(1).subscribe(n => { console.log(n); this.addressmodel = n.data });
  }
  getUserPersonDetails() {

    this.service.getUserByToken().subscribe(
      data => {
        if (data != null) {
          this.usermodel = data.data;
          console.log(this.usermodel)
        }
        else {
          console.log("No Data")
        }
      }
    )
  }

  onSumbitForPassword() {
    if (this.token != null) {
      this.service.passwordReset(this.token, this.usermodel.password).subscribe(

      )
      console.log(this.usermodel.password);
    }

  }

  typeCall(type: number) {
    this.service.getuserAddress(type).subscribe(n => {
      console.log(n);
      if (n.data) {
        this.addressmodel = n.data
      } else {
        this.addressmodel = {
          name: '',
          pincode: '',
          locality: '',
          address: '',
          city: '',
          landmark: '',
          type: type
        }
      }
    });
    this.type[0] = false;
    this.type[type - 1] = true;
    return true;
  }




}
