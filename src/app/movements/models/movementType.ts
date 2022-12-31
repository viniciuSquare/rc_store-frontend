import { Serializable } from "src/app/base/serialazable";

export class MovementType extends Serializable {
  public id: number = null;
  public name: string = null;
  public operator: 1|0 = null;

  constructor(data: Object = {}) {
    super();
    this.serialize(data);
  }

  override get relationships(): Object {
    return {}
  }

  override get http_data(): Object {
    return {
      name: this.name,
      operator: this.operator
    }
  }
}
