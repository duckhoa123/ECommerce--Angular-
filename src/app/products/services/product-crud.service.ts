import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import fs from 'fs';  
import data from '../../../../data.json'

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {

  constructor() { }
  getProductList(){
    return data;
  }
  getProduct(id:number){
    return data[id-1];
  }
}
