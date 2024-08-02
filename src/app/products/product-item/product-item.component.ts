import { Component,OnInit,Input } from '@angular/core';
import { ProductItem } from '../../models/ProductItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product:ProductItem;
  constructor(){
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:''
    }
  };
  ngOnInit(): void{}

}
