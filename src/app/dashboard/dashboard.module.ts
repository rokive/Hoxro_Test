import { ShoppingListModule } from './../shopping-list/shopping-list.module';
import { CreateShoppingModule } from './../create-shopping/create-shopping.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CreateShoppingModule,
    ShoppingListModule
  ]
})
export class DashboardModule { }
