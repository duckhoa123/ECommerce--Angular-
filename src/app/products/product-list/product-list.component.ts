import { Component, OnInit } from '@angular/core';
import {ProductItem} from '../../models/ProductItem'
import {ProductCrudService} from '../services/product-crud.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: ProductItem[] = [];
  constructor(private productCrud:ProductCrudService){}
  ngOnInit(): void {
    this.productList=this.productCrud.getProductList();
    
  }


}
