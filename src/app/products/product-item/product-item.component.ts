import { Component,OnInit,Input } from '@angular/core';
import { ProductItem } from '../../models/ProductItem';
import {ProductCrudService} from '../services/product-crud.service'
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product:ProductItem;
  

  constructor(private productCrud:ProductCrudService){
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:''
    }
  };
  ngOnInit(): void{
   
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
