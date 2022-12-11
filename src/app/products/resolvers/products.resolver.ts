import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productService: ProductService
  ) { }

  instanceProduct = product => new Product(product);

  resolve(route: ActivatedRouteSnapshot): Observable<Product> | Promise<Product> | Product {
    return this.productService.get().then(
      response => {
        return response
      }
    ).catch(
      error => {
        console.log(error)
        return null;
      }
    )
  }
}
