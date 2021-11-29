import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book?: Book;
  @Output() wishlist_book = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addToWishlist() {
    this.wishlist_book.emit(this.book?.volumeInfo.title);
  }
}
