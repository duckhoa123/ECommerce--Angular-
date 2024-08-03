import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductItem} from '../../models/ProductItem';
import {ProductCrudService} from '../services/product-crud.service';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product:ProductItem;
  id:string|null=null;
  constructor(private route: ActivatedRoute,private productCrud:ProductCrudService) {  this.product={
    id:0,
    name:'',
    price:0,
    url:'',
    description:''
  }}
 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product=this.productCrud.getProduct(Number(this.id));
  }
  onClick(quantity:string): void {
    try{
      let pr = localStorage.getItem(`${this.product.id}`);
      if (pr) {  
      let obj:CartItem=JSON.parse(pr as string);
      obj.amount=Number(quantity);
  
        localStorage.setItem(`${this.product.id}`, JSON.stringify(obj));
     
      }
      else{ 
        let obj:CartItem={...this.product,amount:Number(quantity)};
        
      localStorage.setItem(`${this.product.id}`, JSON.stringify(obj));
    }
    alert("Add successfully");
  }
  catch{
    alert("Error");
  }
  }
}
