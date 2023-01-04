import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Movement } from '../movements/models/movement';
import { MovementType } from '../movements/models/movementType';
import { MovementService } from '../movements/movement.service';
import { Product } from './models/product';
import { ProductCategory } from './models/productCategory';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  protected url: string = 'api/products';

  constructor(
    injector: Injector,
    private movementService: MovementService
  ) {
    super();
    this.http = injector.get(HttpClient);
  }

  getProduct(id = ""): Promise<any> {
    return this.http.get(this.buildUrl() + '/' + id).toPromise()
      .then((response: any) => {
        return response.data.map(product => new Product(product))
      });
    ;
  }

  getProductCategories(id = ""): Promise<any> {
    return this.http.get(this.buildUrl('categories')).toPromise()
      .then((response: any) => {
        return response.data.map(category => new ProductCategory(category))
      }).catch(e => console.log(e));
  }

  storeCategory(category: ProductCategory): Promise<any> {
    return this.http.post(this.buildUrl("categories"), category.http_data)
      .toPromise();
  }

  deleteCategory(id: number) {
    return this.http.delete(this.buildUrl(`categories/${id}`))
      .toPromise()
  }

  updateStock(movement: Movement) {
    return this.http.post(this.buildUrl('movement'), movement.http_data)
      .toPromise();
  }

  getStock(): Promise<any> {
    return this.http.get(this.buildUrl('stock'))
      .toPromise();

  }
}
