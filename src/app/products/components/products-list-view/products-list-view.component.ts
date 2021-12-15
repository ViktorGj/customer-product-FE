import {Component, Input} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {RemoveProductConfirmationModalComponent} from '../remove-product-confirmation-modal/remove-product-confirmation-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent {

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
