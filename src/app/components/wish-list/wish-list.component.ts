import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  @Input() wishlist!: string[];
  // wishlist: string[] = [];
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  deleteFromWishlist(title: string) {
    this.wishlist = this.wishlist.filter((ele: any) => ele !== title);
    this.count = this.wishlist.length;
  }
}
