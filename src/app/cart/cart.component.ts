import { Component,OnInit } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  productList: CartItem[] = [];
  total:number=0;
  constructor(){}
  ngOnInit(): void {
    this.productList=[];
    this.total=0;
    for (let i = 0; i < localStorage.length; i++) {
      
      const key = localStorage.key(i);
      const value = localStorage.getItem(key as string);
      let obj:CartItem=JSON.parse(value as string);
      this.total+=obj.amount*obj.price;
      this.productList[i] = obj;
  }
    
  }
  
  onChange(event: Event,proid:number):void{
    const inputElement = event.target as HTMLInputElement;
   if(Number(inputElement.value)>=0 && Number(inputElement.value)<=10 )
   {
    let pr = localStorage.getItem(`${proid}`);
      let obj:CartItem=JSON.parse(pr as string);
      this.total-=obj.amount*obj.price;
      obj.amount=Number(inputElement.value);
      this.total+=obj.amount*obj.price;
      if(Number(inputElement.value)===0){
        localStorage.removeItem(`${proid}`);
        this.ngOnInit();
      }
      else{
        localStorage.setItem(`${proid}`, JSON.stringify(obj)); }  
      

  }
}


}
