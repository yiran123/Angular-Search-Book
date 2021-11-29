import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  @Input() wishlist!: string[];
  @Output() deleted_book = new EventEmitter();
  // wishlist: string[] = [];
  //count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  deleteFromWishlist(title: string) {
    this.deleted_book.emit(title);
  }
}
