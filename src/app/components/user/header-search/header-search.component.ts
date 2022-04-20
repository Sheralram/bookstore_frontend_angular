import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  bookName='';

  @Input() fullDisplay:boolean;

  @Output() searchEvent= new EventEmitter<String>(); 
  
  constructor(public router:Router,
     public userService:UserService) {
    this.fullDisplay=true;
   }

  ngOnInit(): void {
  }

  onLogout(){
    this.userService.logout()
    this.router.navigate(["/login"]);
  }

  isSerarch(){
    console.log(this.bookName)
    this.searchEvent.emit(this.bookName);
  }

}
