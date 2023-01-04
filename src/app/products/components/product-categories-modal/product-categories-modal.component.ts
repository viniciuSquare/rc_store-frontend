import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductCategory } from '../../models/productCategory';
import { ProductService } from '../../product.service';

@Component({
  selector: 'product-categories-modal',
  templateUrl: './product-categories-modal.component.html',
  styleUrls: ['./product-categories-modal.component.scss'],
})
export class ProductCategoriesModalComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) {
  }

  @Input() categories: ProductCategory[] = null;

  ngOnInit() {
  }

  // ionViewWillEnter() {
  // }

  // populateCategoriesIfThereIsNone() {
  //   console.log("To evaluate categories data", !!this.categories);

  //   if( !!this.categories ) {
  //     console.log("There is no categories data");
  //     this.getProductCategories();
  //   }
  // }

  // getProductCategories() {
  //   this.productService.getProductCategories()
  //     .then(this.populateProductCategories);
  // }

  // populateProductCategories( productCategories: ProductCategory[] ) {
  //   this.categories = productCategories
  // }

  // get productCategories( ) {
  //   return this.productCategories;
  // }

}
