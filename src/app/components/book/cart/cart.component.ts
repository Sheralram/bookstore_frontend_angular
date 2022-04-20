import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class CartComponent implements OnInit {

  public cartlist: any[] = []

  public totalPrice: number = 0;
  public markedPrice: number = 0;

  public addressAllowed = false;
  public type = [true, false, false];

  addressModel = {
    name: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    landmark: '',
    type: 1
  }

  customerSection = false;
  summarySection = false;

  constructor(public bookService: BookService, public router: Router, public userService: UserService) {
  }


  ngOnInit(): void {
    this.reload();
    this.userService.getuserAddress(1).subscribe(n => { console.log(n); this.addressModel = n.data });
  }

  reload() {
    this.bookService.getCartlist().subscribe((n: any) => {
      this.cartlist = n.data
      for (let book of this.cartlist) {
        this.totalPrice = this.totalPrice + (book.quantity * book.book.price);
        this.markedPrice = this.markedPrice + (book.quantity * book.book.markedPrice);
        console.log("onit");
        console.log(this.markedPrice);
      }
    });
  }

  remove(bookId: number) {
    this.bookService.removeFromCart(bookId, 0).subscribe(n => this.reload());

  }

  removeOneBook(bookId: number, bookQunatity: number) {
    this.bookService.removeFromCart(bookId, (bookQunatity - 1)).subscribe(n => { this.reload(); console.log(bookQunatity - 1) });

  }

  addOneBook(bookId: number, bookQunatity: number) {
    this.bookService.addToCart(bookId, bookQunatity + 1).subscribe(n => { this.reload(); console.log(bookQunatity + 1) });

  }


  placeOrder() {
    let count = 1;
    for (let type of this.type) {

      if (type) {
        this.addressModel.type = count;
        break;
      }
      count++;
    }
    this.bookService.placeOrder().subscribe(n => console.log("orderPlaced!"));
    this.router.navigate(["/greeting"]);
  }

  changeAddressAllowed() {
    this.addressAllowed = true;
  }

  typeCall(type: number) {
    this.userService.getuserAddress(type).subscribe(n => {
      console.log(n);
      if (n.data) {
        this.addressModel = n.data
      } else {
        this.addressModel = {
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

  addressTypeSave() {
    this.userService.userAddress(this.addressModel).subscribe(n => { console.log("addressSaved"); this.summarySection = true });

  }
}