import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Product } from './models/product';
import { ProductCategory } from './models/productCategory';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  protected url: string = 'api/products';

  constructor(injector: Injector) {
    super();
    this.http = injector.get(HttpClient);
  }

  getProduct(id = ""): Promise<any> {
    return this.http.get(this.buildUrl() + '/' + id).toPromise()
    .then( (response: any) => {
      return response.data.map( product => new Product(product) )
    });
    ;
  }

  getProductCategories(id = ""): Promise<any> {
    return this.http.get(this.buildUrl('categories')).toPromise()
      .then( (response: any) => {
        return response.data.map( category => new ProductCategory(category) )
      }).catch(e => console.log(e));
  }

  storeCategory(category: ProductCategory): Promise<any> {
    return this.http.post(this.buildUrl("categories") , category.http_data )
      .toPromise();
  }
}
