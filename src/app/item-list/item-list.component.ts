import { Item } from './../shared/models/item.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AllService } from '../shared/services/all.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList:Item[]=null;
  @Input() shopid:number; 
  constructor(private allService:AllService) { }

  ngOnInit() {
    this.allService.getAllProduct().subscribe((result:Item[])=>{
      this.itemList=result
      console.log(this.itemList);
    })
  }

}
