
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditComponent } from './inline-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InlineEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    InlineEditComponent
  ]
})
export class InlineEditModule { }
