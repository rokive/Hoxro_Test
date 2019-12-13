import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../utils/config.service';
import { Item } from '../models/item.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  baseUrl: string;

  constructor(private httpclint: HttpClient, private configService: ConfigService) { 
    this.baseUrl=configService.getApiURI();
  }

  getAllItem():Observable<Item[]>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : "true",
      })
      };
      return this.httpclint.get<Item[]>(this.baseUrl+"/getAllItem",  httpOptions)
  }
}
