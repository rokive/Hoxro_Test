import { Item } from '../models/item.interface';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { Shopping } from '../models/shopping.interface';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl: string;
  shopping:Shopping={name:"",itemList:[]};

  private _update = new BehaviorSubject<any>({});
  update$ = this._update.asObservable();

  constructor(private httpclint: HttpClient, private configService: ConfigService) { 
    this.baseUrl=configService.getApiURI();
    this.getShopping()
  }

  getAllItem(): Observable<Item[]> {
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
    };
    return this.httpclint.get<Item[]>(this.baseUrl,  httpOptions)
      
  }
  addItemInShoppingList(item:Item){
    if (!localStorage.shopping){
        this.shopping.itemList.push(item);
        localStorage.setItem("shopping", JSON.stringify(this.shopping));
    }
    else{
      this.shopping = JSON.parse(localStorage.getItem('shopping'));
      this.shopping.itemList.push(item);
      localStorage.setItem("shopping", JSON.stringify(this.shopping));
    }
    this._update.next(this.shopping);
    console.log(JSON.parse(localStorage.getItem('shopping')))
  }

  removeItemInShoppingList(item:Item){
    this.shopping = JSON.parse(localStorage.getItem('shopping'));
    const index = this.shopping.itemList.findIndex(q =>q.gtin14 === item.gtin14);
    this.shopping.itemList.splice(index, 1);
    localStorage.setItem("shopping", JSON.stringify(this.shopping));
    this._update.next(this.shopping);
  }

  getShopping(){
    
    if(!localStorage.shopping)
    {
        this.shopping.name="default"
        this.shopping.itemList=[];
        this._update.next(this.shopping);
    }
    else{
      this.shopping=JSON.parse(localStorage.getItem('shopping'))
      console.log(JSON.parse(localStorage.getItem('shopping')));
      this._update.next(this.shopping)
    }  
    
  }


}
