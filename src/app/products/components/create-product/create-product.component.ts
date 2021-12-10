import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log('add new product and show modal suggestion for another');
  }

}
