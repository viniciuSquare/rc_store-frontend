import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementTypeSelectorComponent } from 'src/app/movements/components/movement-type-selector/movement-type-selector.component';
import { MovementType } from 'src/app/movements/models/movementType';
import { movementService } from 'src/app/movements/movement.service';
import { Product } from '../../models/product';
import { ProductCategory } from '../../models/productCategory';
import { ProductService } from '../../product.service';

@Component({
  selector: 'edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.scss'],
})
export class ProductEditFormComponent implements OnInit {
  @Output() onProductSubmitted = new EventEmitter<any>();

  @Input() product: Product = null;
  @Input() categories: Array<ProductCategory> = [];

  @ViewChild('typeSelector') typeSelector: MovementTypeSelectorComponent;


  public initialStock: number = null;

  public showNewCategoryInput = false;
  public showMovementTypeSelector = false;

  public movementTypes: MovementType[] = null;

  /**
   * Declare if income or outcome - 1 | 0
   * */
  public movementOperator: 1|0 = null;

  constructor(
    private productService: ProductService,
    private movementService: movementService
  ) {  }

  ngOnInit() {  }

  /**
   * Check movement type from difference between initial stock and current - inputed
   * */
  stockChange(event) {
    const { value: currentStock } = event.target;

    // There is change of stock
    if( currentStock != this.product.stock && currentStock != '' ) {
      this.movementOperator = currentStock > this.product.stock ? 1 : 0;
      this.showMovementTypeSelector = true;
    }
  }

  submitToUpdateProduct() {
    this.productService.update(this.product)
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

  toggleMovementTypeSelectorVisibility() {
    this.showMovementTypeSelector = !this.showMovementTypeSelector;
  }

  get isCategorySaved() {
    return !!this.product.category?.id
  }
}
