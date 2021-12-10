import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RemoveProductConfirmationModalComponent} from '../remove-product-confirmation-modal/remove-product-confirmation-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listView = true;
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  public openDeleteConfirmation(id: string): void {
    const modalRef = this.modalService.open(RemoveProductConfirmationModalComponent, {
      animation: true,
      keyboard: true
    });
    modalRef.result.then(confirmed => {
      if (confirmed === true) {
        this.productsService.removeProduct(id);
      } else {
        return;
      }
    });

  }
}
