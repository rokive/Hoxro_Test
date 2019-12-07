import { Item } from './../shared/models/item.interface';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList:Item[]=null; 
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.getAllItem().subscribe((result:Item[])=>{
      this.itemList=result
      console.log(this.itemList);
    })
  }

}
