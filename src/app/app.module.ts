import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SidePanelComponent } from './page/components/side-panel/side-panel.component';
import { ListViewComponent } from './products/components/list-view/list-view.component';
import { GridViewComponent } from './products/components/grid-view/grid-view.component';
import { ProductsComponent } from './products/components/products/products.component';
import { CreateProductComponent } from './products/components/create-product/create-product.component';
import { SuggestionComponent } from './products/components/suggestion/suggestion.component';
import { HomeComponent } from './page/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidePanelComponent,
    ListViewComponent,
    GridViewComponent,
    ProductsComponent,
    CreateProductComponent,
    SuggestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
