import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public showNewCategoryInput = false;

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.activedRoute.data.subscribe( ({categories}) => {
      this.categories = categories
    })
  }

  submitToStoreProduct() {
    console.log(this.product)
    this.productService.store(this.product)
      .then( response => {
        console.log(response)
        this.onProductSubmitted.emit(response.data);
    });
  }

  selectedCategory(category) {
    if(category.target.value=="new") {
      this.toggleNewCategoryInputVisibility();
      return
    }

    this.product.category = category.target.value
  }

  storeCategory() {
    this.productService.storeCategory(this.product.category)
      .then(  newCategoryArray =>{
        this.categories.push( new ProductCategory(newCategoryArray[0]) );
        this.storedCategoryAsProductSelectedCategory();
      })
      .finally(()=>
        this.toggleNewCategoryInputVisibility()
      );
  }

  storedCategoryAsProductSelectedCategory() {
    this.product.category = this.categories[this.categories.length-1]
  }

  toggleNewCategoryInputVisibility() {
    this.showNewCategoryInput = !this.showNewCategoryInput;
  }

  get isCategorySaved() {
    return !!this.product.category?.id
  }
}
