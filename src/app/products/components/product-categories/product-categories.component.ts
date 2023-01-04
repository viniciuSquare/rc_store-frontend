import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from '../../models/productCategory';
import { ProductService } from '../../product.service';

/**
 * Component expects resolver categories data
 * */
@Component({
  selector: 'product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent implements OnInit {

  public categories: ProductCategory[] = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({categories}) => {
      console.log(categories, " Categories component");
      this.populateProductCategories(categories);
    })
  }

  populateProductCategories(productCategories: ProductCategory[]) {
    this.categories = productCategories
  }

  get productCategories() {
    return this.productCategories;
  }

  delete( id: number ) {
    this.productService.deleteCategory(id);
  }

}
