import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<CustomerModel[]>;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customers$ = this.customersService.getCustomers();
  }

}
