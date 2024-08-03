import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'detail/:id',component:ProductDetailComponent},
  { path: 'success/:fullName/:totalPrice',component:ConfirmationComponent},
  {path:'cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
