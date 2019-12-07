import { SearchPipe } from './../shared/pipes/search.pipe';
import { ItemListComponent } from './item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ItemModule,
    FormsModule,
   
  ],
  exports:[
    ItemListComponent
  ]
})
export class ItemListModule { }
