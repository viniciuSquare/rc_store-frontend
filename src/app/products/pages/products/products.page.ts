import { Component, OnInit, ViewChild } from '@angular/core';
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
