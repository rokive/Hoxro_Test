import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { ProductService } from './product.service';
import { Item } from '../models/item.interface';
import { Shopping } from '../models/shopping.interface';
import { ShopItem } from '../models/shop-item.interface';

@Injectable()
export class AllService {
  
  private _update = new BehaviorSubject<boolean>(false);

  update$ = this._update.asObservable();

  constructor(private injector: Injector) { }

  private _shoppingService: ShoppingService;
  public get shoppingService(): ShoppingService {
    if(!this._shoppingService){
      this._shoppingService = this.injector.get(ShoppingService);
    }
    return this._shoppingService;
  }
  
  updateList(){
    this._update.next(true);
  }
  
  addShopping(shopName:string):Observable<Shopping[]>{
    return this.shoppingService.addShopping(shopName);
  }

  updateShopping(shopping:Shopping):Observable<string>{
    return this.shoppingService.updateShopping(shopping);
  }

  getAllShopping():Observable<Shopping[]>{
    return this.shoppingService.getAllShopping();
  }
  
  getShopping(id:number):Observable<Shopping>{
    return this.shoppingService.getShopping(id);
  }

  addShoppingItem(shopItem:ShopItem):Observable<string>{
    return this.shoppingService.addShoppingItem(shopItem);
  }

  removeShoppingItem(shopItem:ShopItem):Observable<string>{
    return this.shoppingService.removeShoppingItem(shopItem);
  }

  getAllShoppingItem(shopId:number):Observable<Item[]>{
    return this.shoppingService.getAllShoppingItem(shopId);
  }
  private _productService: ProductService;
  public get productService(): ProductService {
    if(!this._productService){
      this._productService = this.injector.get(ProductService);
    }
    return this._productService;
  }

  getAllProduct():Observable<Item[]>{
    return this.productService.getAllItem();
  }
}
