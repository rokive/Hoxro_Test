import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import { Shopping } from '../shared/models/shopping.interface';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shopList: Shopping[] = [];
  constructor(private allService: AllService) {
    this.allService.update$.subscribe(result => {
      this.getAllShop();

    })
  }

  ngOnInit() {

  }
  getAllShop() {
    this.allService.getAllShopping().subscribe(result => {
      this.shopList = result;
    }, error => {

    })
  }
}
