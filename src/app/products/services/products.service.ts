import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnDestroy {

  private subscriptions = new Subscription();
  public productsSubject: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>(mockProducts);

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getProducts(): Observable<ProductModel[]> {
    return this.productsSubject.asObservable()
      .pipe(
        delay(1000)
      );
  }

  public addProduct(product: ProductModel): void {
    this.subscriptions.add(
      this.productsSubject.pipe(
        map((products: ProductModel[]) => {
          return products.push(product);
        })
      ).subscribe()
    );
  }

  public removeProduct(id: string): void {
    this.subscriptions.add(
      this.productsSubject.pipe(
        map(products => {
          const index = products.findIndex(x => x.id === id);
          if (index !== -1) {
            return products.splice(index, 1);
          } else {
            return products;
          }
        })
      ).subscribe()
    );
  }
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
];
