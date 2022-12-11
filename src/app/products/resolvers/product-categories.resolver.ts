import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../models/productCategory';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesResolver implements Resolve<ProductCategory> {

  constructor(
    private productService: ProductService
  ) {}

  instanceCategory = category => new ProductCategory(category);

  resolve(route: ActivatedRouteSnapshot): Observable<ProductCategory> | Promise<ProductCategory> | ProductCategory {
    return this.productService.getProductCategories().then(
      response => response
    ).catch(
      error => {
        console.log(error)
        return null;
      }
    )
  }
}
