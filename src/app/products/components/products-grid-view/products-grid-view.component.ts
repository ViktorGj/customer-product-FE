import {Component, Input} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RemoveProductConfirmationModalComponent} from '../remove-product-confirmation-modal/remove-product-confirmation-modal.component';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrls: ['./products-grid-view.component.scss']
})
export class ProductsGridViewComponent {

  @Input() products: ProductModel[];

  constructor(private productsService: ProductsService,
              private modalService: NgbModal) {
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
