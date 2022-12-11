import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product> = [];
  constructor(
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.data.subscribe( ({products}) => {
      return this.populate(products.data)
    })
  }

  populate(products: Array<Product>) {
    products.map( product =>  this.products.push(new Product(product)));
  }

  get isListPopulated() {
    return this.products?.length > 0
  }

}
