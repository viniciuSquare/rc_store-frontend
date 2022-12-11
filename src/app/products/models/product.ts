import { Serializable } from "src/app/base/serialazable";

import { ProductCategory } from "./productCategory";

export class Product extends Serializable {

  public id: number = null;
  public name: string = '';
  public price: number = null;
  public quantity: number = null;
  public category?: ProductCategory = null;


  constructor(data: Object = {}) {
    super();
    this.serialize(data);
  }

  override get relationships(): Object {
    return {
      category: ProductCategory
    }

  }

  override get http_data(): Object {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      productCategoryId: this.productCategoryId,
      quantity: this.quantity
    }
  }

  get productCategoryId() {
    return this.category ? this.category.id : null;
  }
}
