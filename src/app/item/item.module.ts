import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ItemComponent
  ]
})
export class ItemModule { }
