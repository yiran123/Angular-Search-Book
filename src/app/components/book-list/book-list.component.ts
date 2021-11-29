import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() booklist?: Book[];
  wishlist: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addToWishlist(title: string) {
    this.wishlist.push(title);
    //console.log(this.wishlist);
  }

  deleteFromWishlist(title: string) {
    this.wishlist = this.wishlist.filter((ele: any) => ele !== title);
  }
}
