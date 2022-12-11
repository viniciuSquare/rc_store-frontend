import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  public formData: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      stockQuantity: new FormControl()
    })
  }

  onSubmit(event) {
    console.log(event)
    console.log(this.formData.value)
  }

}
