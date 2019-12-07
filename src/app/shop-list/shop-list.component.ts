import { Component, OnInit } from '@angular/core';
import { Shopping } from '../shared/models/shopping.interface';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item.interface';

@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shopping:Shopping;
  itemList:Item[]=null; 
  name: string = 'Defualt';
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.update$.subscribe(result=>{
      this.shopping=result;
      this.itemList=this.shopping.itemList;
      console.log(this.shopping)
    })
 
  
  }
 
}
