import { DashboardModule } from './dashboard/dashboard.module';
import { ProductService } from './shared/services/product.service';
import { AllService } from './shared/services/all.service';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './shared/utils/config.service';
import { ShoppingService } from './shared/services/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HeaderModule,
    // DashboardModule,
    // HomeModule,
    HttpClientModule,
    
  ],
  providers: [ConfigService,ProductService,ShoppingService, AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
