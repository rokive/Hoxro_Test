import { Shopping } from './../shared/models/shopping.interface';
import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/services/all.service';

@Component({
  selector: 'create-shopping',
  templateUrl: './create-shopping.component.html',
  styleUrls: ['./create-shopping.component.css']
})
export class CreateShoppingComponent implements OnInit {
  
  constructor(private allService:AllService) { }

  ngOnInit() {
  }
  addShop(shop){
    console.log(shop)
    this.allService.addShopping(shop.name).subscribe(result=>{
      this.allService.updateList();
    },error=>{
      
    });
  }
}
