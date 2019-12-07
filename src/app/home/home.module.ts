import { ShopListModule } from './../shop-list/shop-list.module';
import { ItemListModule } from './../item-list/item-list.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemListModule,
    ShopListModule
  ]
})
export class HomeModule { }
