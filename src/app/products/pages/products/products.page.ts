import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsIndexPage implements OnInit {

  constructor( ) { }

  ngOnInit(): void { }

  log(event){
    console.log(event);
  }

  // WHEN create category SELECTED, SHOW CATEGORY CREATION COMPONENT

}
