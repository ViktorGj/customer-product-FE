import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { RemoveProductConfirmationModalComponent } from './components/remove-product-confirmation-modal/remove-product-confirmation-modal.component';
import {ProductsComponent} from './components/products/products.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {SuggestionComponent} from './components/suggestion/suggestion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductsListViewComponent } from './components/products-list-view/products-list-view.component';
import { ProductsGridViewComponent } from './components/products-grid-view/products-grid-view.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    RemoveProductConfirmationModalComponent,
    SuggestionComponent,
    ProductsListViewComponent,
    ProductsGridViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
