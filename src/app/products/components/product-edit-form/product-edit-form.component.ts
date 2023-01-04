import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovementDetailsComponent } from 'src/app/movements/components/movement-type-selector/movement-type-selector.component';
import { Movement } from 'src/app/movements/models/movement';
import { MovementType } from 'src/app/movements/models/movementType';
import { MovementService } from 'src/app/movements/movement.service';
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

  @ViewChild('typeSelector') typeSelector: MovementDetailsComponent;


  public initialStock: number = null;

  public showNewCategoryInput = false;
  public showMovementTypeSelector = false;

  public movementTypes: MovementType[] = null;

  /**
   * Declare if income or outcome - 1 | 0
   * */
  public movementOperator: 1|0 = null;

  constructor(
    private productService: ProductService
  ) {  }

  ngOnInit() {  }

  /**
   * Check movement type from difference between initial stock and current - inputed
   * */
  handleInputedStock(event) {
    const { value: inputedStock } = event.target;

    const isProductStockUpdate = inputedStock != this.product.stock && inputedStock != '';

    // There is change of stock
    if( isProductStockUpdate ) {
      // SHOW MOVEMENTATION FORM
      this.showMovementTypeSelector = true;

      this.populateComponentMovementationData(inputedStock);
    } else {
      if( this.showMovementTypeSelector ) {
        this.toggleMovementTypeSelectorVisibility();
      }
    }
  }

  populateComponentMovementationData(currentStock: number) {
    this.movementOperator = currentStock > this.product.stock ? 1 : 0;
    const movementedQuantity = Math.abs(this.product.stock - currentStock);

    // populate movementation data on component
    this.typeSelector.movementation = new Movement({
      quantity: movementedQuantity,
      cost: this.typeSelector.movementation.cost,
      type: this.typeSelector.movementation.type,
      product: this.product,
      previousStock: this.product.stock
    })

  }

  submitToUpdateProduct() {
    this.productService.updateStock(this.typeSelector.movementation)
      .then(response => {

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
