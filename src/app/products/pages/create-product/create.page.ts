import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-page',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreateProductPage implements OnInit {

  public formData: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    console.log(event)
  }

}
