import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCategory } from '../../models/productCategory';
import { ProductService } from '../../product.service';

@Component({
  selector: 'product-creation-form',
  templateUrl: './product-creation-form.component.html',
  styleUrls: ['./product-creation-form.component.scss'],
})
export class ProductCreationFormComponent implements OnInit {

  @Output() onProductSubmitted = new EventEmitter<any>();

  public categories: Array<ProductCategory> = [];

  public product = new Product();


  constructor(
    private service: ProductService
  ) {

    this.product.category = new ProductCategory();
  }

  ngOnInit() {
    this.service.getProductCategories().then(
      response => {
        response.data.map( category => {
          this.categories.push( new ProductCategory(category) )
          console.log(new ProductCategory(category))

        })
      }
    ).finally( () => console.log(this.categories))
  }

  submitProduct() {
    this.service.store(this.product)
      .then( response => {
        this.onProductSubmitted.emit(response.data);
    });
  }

  selectedCategory(category) {
    console.log(category.target.value)

    if(category.target.value=="new") {
      console.log(category.target.value)

      return
    }
    this.product.category = category.target.value
  }

  storeCategory() {
    console.log(this.product.category)
    this.service.storeCategory(this.product.category)
      .then(
        response => console.log(response.data)
      );
  }

  get isCategorySaved() {
    return !!this.product.category?.id
  }

}
