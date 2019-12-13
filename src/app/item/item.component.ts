import { Item } from './../shared/models/item.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AllService } from '../shared/services/all.service';
import { ShopItem } from '../shared/models/shop-item.interface';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() isAdd = false;
  @Input() item:Item;
  @Input() shopid:number;
  shopItem:ShopItem={shoppingId:0,itemId:0}
  constructor(private allService:AllService) { }

  ngOnInit() {
  }

  add(item){
     console.log(item.id+" "+this.shopid);
     this.shopItem.itemId=item.id;
     this.shopItem.shoppingId=this.shopid;
    this.allService.addShoppingItem(this.shopItem).subscribe(result=>{
      console.log(result)
      this.allService.updateList();
    },error=>{
      console.log(error)
    });
  }
  remove(item){
    console.log(item.id+this.shopid);
    this.shopItem.itemId=item.id;
     this.shopItem.shoppingId=this.shopid;
    this.allService.removeShoppingItem(this.shopItem).subscribe(result=>{
      console.log(result)
      this.allService.updateList();
    },error=>{
      console.log(error)
    });;
  }
}
