import { Shopping } from './../models/shopping.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../utils/config.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShopItem } from '../models/shop-item.interface';
import { Item } from '../models/item.interface';

@Injectable()
export class ShoppingService {
  baseUrl: string;


  constructor(private httpclint: HttpClient, private configService: ConfigService) { 
    this.baseUrl=configService.getApiURI();
  }

  addShopping(shopName:string):Observable<Shopping[]>{
    let body=JSON.stringify({name:shopName});
    console.log(shopName);
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Credentials' : "true",
    })
    };
    return this.httpclint.post<Shopping[]>(this.baseUrl + '/AddShopping', body, httpOptions)
  }

  updateShopping(shopping:Shopping):Observable<string>{
    let body=JSON.stringify(shopping);

    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Credentials' : "true",
    })
    };
    return this.httpclint.post<string>(this.baseUrl + '/UpdateShopping', body, httpOptions)
  }

  getAllShopping():Observable<Shopping[]>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.get<Shopping[]>(this.baseUrl+"/GetAllShopping",  httpOptions)
  }

  getShopping(id:number):Observable<Shopping>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.get<Shopping>(this.baseUrl+"/GetShopping/?id="+id,  httpOptions)
  }

  addShoppingItem(shopItem:ShopItem):Observable<string>{
    let body=JSON.stringify(shopItem);
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.post<string>(this.baseUrl+"/AddShoppingItem",body,  httpOptions)
  }

  removeShoppingItem(shopItem:ShopItem):Observable<string>{
    let body=JSON.stringify(shopItem);
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.post<string>(this.baseUrl+"/DeleteShoppingItem",body,  httpOptions)
  }
  
  getAllShoppingItem(shopId:number):Observable<Item[]>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.get<Item[]>(this.baseUrl+"/GetAllShoppingItemById/?id="+shopId,  httpOptions)
  }
  
}
