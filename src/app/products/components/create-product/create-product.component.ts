import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SuggestionComponent} from '../suggestion/suggestion.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]*$')])
  });

  constructor(private productsService: ProductsService,
              private modal: NgbModal,
              private router: Router) {
  }

  public submit(): void {
    const product: ProductModel = {
      id: Math.floor(Math.random() * 1000).toString(),
      name: this.form.controls.name.value,
      price: this.form.controls.price.value
    };
    this.productsService.addProduct(product);
    const modalRef = this.modal.open(SuggestionComponent, {
      animation: true,
      keyboard: true
    });

    modalRef.result.then(result => {
      if (result === true) {
        this.form.reset();
        return;
      } else {
        this.router.navigateByUrl('products');
      }
    });
  }

}
