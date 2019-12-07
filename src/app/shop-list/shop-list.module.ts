import { InlineEditModule } from './../inline-edit/inline-edit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ShopListComponent } from './shop-list.component';
import { ItemModule } from '../item/item.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopListRoutingModule,
    ItemModule,
    InlineEditModule,
    FormsModule,
  ],
  exports:[
    ShopListComponent
  ]
})
export class ShopListModule { }
