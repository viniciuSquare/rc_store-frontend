import { Serializable } from "src/app/base/serialazable";
import { Movement } from "src/app/movements/models/movement";

import { ProductCategory } from "./productCategory";

export class Product extends Serializable {

  public id: number = null;
  public name: string = '';
  public salePrice: number = null;
  public costPrice: number = null;
  public stock: number = null;
  public category? = new ProductCategory();

  public movements:Movement[] = null;

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
      sale_price: this.salePrice,
      cost_price: this.costPrice,
      product_category_id: this.productCategoryId,
      stock: this.stock
    }
  }

  get productCategoryId() {
    return this.category ? this.category.id : null;
  }
}
