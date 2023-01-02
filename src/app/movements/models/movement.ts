import { Serializable } from "src/app/base/serialazable";
import { Product } from "src/app/products/models/product";

import { MovementType } from "./movementType";

export class Movement extends Serializable {

  public id: number = null;
  public product: Product = null;
  public cost: number = null;
  public quantity: number = null;
  public type? = new MovementType();

  public description: string = null;
  public previousStock: number = null;

  constructor(data: Object = {}) {
    super();
    this.serialize(data);
  }

  override get relationships(): Object {
    return {
      type: MovementType
    }

  }

  override get http_data(): Object {
    return {
      id: this.id,
      product_id: this.productId,
      description: this.getDescription(),
      previous_stock: this.previousStock,
      cost: this.cost,
      quantity: this.quantity,
      movement_type_id: this.movementTypeId
    }
  }

  get movementTypeId() {
    return this.type ? this.type.id : null;
  }

  get productId() {
    return this.product ? this.product.id : null;
  }

  getDescription() {
    return this.type.name + " de " + this.quantity + " de " + this.product?.name
      + ". Custo de R$" + this.cost + "/ UN, Total: R$" + this.cost * this.quantity
  }
}
