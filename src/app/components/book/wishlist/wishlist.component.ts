import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(public bookService:BookService, public router: Router) { }
  wishlist:any[]=[];
  
  ngOnInit(): void {
   this.reload();
  }

  reload(){
    this.bookService.getWishList().subscribe(n=>{console.log(n.data); this.wishlist=n.data})
  }

  delete(bookId:number){
    this.bookService.removeFromWishList(bookId).subscribe(n=>this.reload());

  }

  gotoBook(n:number){
    this.router.navigate(["/book-details/"+n])
  }
}
