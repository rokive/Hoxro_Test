import { ShopItem } from './../shared/models/shop-item.interface';
import { AllService } from './../shared/services/all.service';
import { Component, OnInit, Input } from '@angular/core';
import { Shopping } from '../shared/models/shopping.interface';
import { Item } from '../shared/models/item.interface';


@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shopping: Shopping={id:0,name:""};
  // shopItemList:ShopItem[]=[]
  itemList: Item[] = [];
  name: string = 'Defualt';
  @Input() shopid:number;
  constructor(private allService: AllService) {

  }

  ngOnInit() {
    this.allService.getShopping(this.shopid).subscribe(result=>{
        this.name=result.name;
    },
    error=>{

    });
    this.allService.update$.subscribe(result => {
     
      this.getAllItem();
    })


  }
  update(value:string){
    this.shopping.id=this.shopid;
    this.shopping.name=value;
    this.allService.updateShopping(this.shopping).subscribe(result=>{

    },error=>{

    });
  }
  getAllItem() {

    this.allService.getAllShoppingItem(this.shopid).subscribe(result => {
     this.itemList = result;
    
    }, error => {

    });
   
  }
}
