import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
