import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listView = true;
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
