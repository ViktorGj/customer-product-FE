import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): Observable<ProductModel[]> {
    return of(mockProducts).pipe(
      delay(1000)
    )
  };


}

const mockProducts: ProductModel[] = [
  {
    id: '1',
    name: 'bike bag',
    price: 100
  },
  {
    id: '2',
    name: 'hat',
    price: 30
  },
  {
    id: '3',
    name: 'glasses',
    price: 84
  },
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