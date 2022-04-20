import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {

  public Orders: any[] = [];

  userId = localStorage.getItem('userId');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrderDetails();
  }
  getAllOrderDetails() {
    if (this.userId != null) {
      this.userService.userOrder(this.userId).subscribe(
        data => { this.Orders = data.data; 
          console.log(this.Orders) }
      )

      console.log(this.userId);

    }
    else {
      console.log("userId is Null")
    }

  }


}
