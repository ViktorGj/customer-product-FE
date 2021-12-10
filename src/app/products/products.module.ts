import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { RemoveProductConfirmationModalComponent } from './components/remove-product-confirmation-modal/remove-product-confirmation-modal.component';


@NgModule({
  declarations: [
    RemoveProductConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
