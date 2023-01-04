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

  resolve(route: ActivatedRouteSnapshot): Promise<Product> {
    const productId = route.paramMap.get("productId");
    const urlParams = productId ? `?id=${productId}` : '';

    const customPath = route.url[0]?.path;

    switch ( customPath ) {
      case 'stock':
        return this.productService.getStock().then(
          ({ data: products }) => products.map(product => new Product(product))
        ).catch(
          error => {
            console.log(error)
            return null;
          }
        )

      default:
        return this.productService.get(`${urlParams}`).then(
          ({ data: products }) => products.map(product => new Product(product))
        ).catch(
          error => {
            console.log(error)
            return null;
          }
        )
    }

  }

}
