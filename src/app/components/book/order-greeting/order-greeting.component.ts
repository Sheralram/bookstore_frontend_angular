import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-greeting',
  templateUrl: './order-greeting.component.html',
  styleUrls: ['./order-greeting.component.scss']
})
export class OrderGreetingComponent implements OnInit {
  titleService: any;

  constructor() { }


  ngOnInit(): void {
  }

  onClickClear() {
    sessionStorage.clear();
  }
  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }


}
