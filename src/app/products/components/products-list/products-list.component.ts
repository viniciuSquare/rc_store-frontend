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
      this.populate(products);
    })
  }

  populate(products: Array<Product>) {
    this.products = products
  }

  get isListPopulated() {
    return this.products?.length > 0
  }

}
