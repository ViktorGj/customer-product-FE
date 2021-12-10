import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  public getCustomers(): Observable<CustomerModel[]> {
    return of(mockCustomers).pipe(
      delay(1000)
    )
  };
}

const mockCustomers: CustomerModel[] = [
  {
    id: '1',
    name: 'Viktor',
    email: 'vik@mail',
    phoneNumber: '11554',
    purchasedProducts: [
      {
        id: '1',
        name: 'bike bag',
        price: 100
      },
      {
        id: '2',
        name: 'hat',
        price: 30
      }
    ]
  },
  {
    id: '1',
    name: 'Aleksandar',
    email: 'alek@mail',
    phoneNumber: '11554',
    purchasedProducts: [
      {
        id: '2',
        name: 'hat',
        price: 30
      },
      {
        id: '3',
        name: 'glasses',
        price: 84
      }
    ]
  },
  {
    id: '1',
    name: 'Maja',
    email: 'maja@mail',
    phoneNumber: '11554',
    purchasedProducts: [
      {
        id: '3',
        name: 'glasses',
        price: 84
      },
      {
        id: '4',
        name: 'usb hub',
        price: 65
      }
    ]
  },
  {
    id: '1',
    name: 'Kristina',
    email: 'kris@mail',
    phoneNumber: '11554',
    purchasedProducts: [
      {
        id: '4',
        name: 'usb hub',
        price: 65
      },
      {
        id: '5',
        name: 'bottle',
        price: 97
      }
    ]
  },
]