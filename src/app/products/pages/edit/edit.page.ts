import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEditFormComponent } from '../../components/product-edit-form/product-edit-form.component';
import { Product } from '../../models/product';
import { ProductCategory } from '../../models/productCategory';

@Component({
  selector: 'edit-page',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditProductPage implements OnInit {
  @ViewChild('editForm') editForm: ProductEditFormComponent;

  public product: Product = null;
  public categories: ProductCategory[] = null;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe( ({products, categories}) => {
      this.product = products[0]
      this.categories = categories;
    } )
  }

}
