import { CreateShoppingComponent } from './create-shopping.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateShoppingComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[CreateShoppingComponent]
})
export class CreateShoppingModule { }
