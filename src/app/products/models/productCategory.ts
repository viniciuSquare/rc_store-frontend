import { Serializable } from "src/app/base/serialazable";


export class ProductCategory extends Serializable {
  public id: number = null;
  public name: string = null;
  public fatherCategory?: ProductCategory = null;

  constructor(data: Object = {}) {
    super();
    this.serialize(data);
  }

  override get relationships(): Object {
    return {
      fatherCategory: ProductCategory
    }
  }

  override get http_data(): Object {
    return {
      name: this.name,
      fatherCategoryId: this.fatherCategoryId
    }
  }

  get fatherCategoryId() {
    return this.fatherCategory ? this.fatherCategory.id : null;
  }
}
