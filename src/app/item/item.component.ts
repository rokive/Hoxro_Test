import { Item } from './../shared/models/item.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() isAdd = false;
  @Input() item:Item;
  
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  add(item){
    console.log(item);
    this.itemService.addItemInShoppingList(item)
  }
  remove(item){
    this.itemService.removeItemInShoppingList(item);
  }
}
