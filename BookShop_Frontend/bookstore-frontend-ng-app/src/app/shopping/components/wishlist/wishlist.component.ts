import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items: any[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.getWishlistItems();
  }

  getWishlistItems(): void {
    this.shoppingService.getWishlistItems()
      .subscribe((res: any) => {
        console.log(res);
        this.items = res;
      });
  }

  deleteById(id:any):void{
    this.shoppingService.deleteWishlistItem(id)
      .subscribe((res: any) => {
        console.log(res);
        this.getWishlistItems();
        //this.dataStore.removeOrderItem(parseInt(id));
      });
  }

}
