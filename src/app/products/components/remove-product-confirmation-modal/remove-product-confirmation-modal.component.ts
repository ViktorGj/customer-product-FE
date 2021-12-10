import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-product-confirmation-modal',
  templateUrl: './remove-product-confirmation-modal.component.html',
  styleUrls: ['./remove-product-confirmation-modal.component.scss']
})
export class RemoveProductConfirmationModalComponent {

  constructor(private modal: NgbActiveModal) {
  }

  dismiss(): void {
    this.modal.dismiss();
  }

  confirm(): void {
    this.modal.close(true);
  }

}
