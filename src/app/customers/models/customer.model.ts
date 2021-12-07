import {ProductModel} from '../../products/models/product.model';

export interface CustomerModel {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  purchasedProducts: ProductModel[];
}
