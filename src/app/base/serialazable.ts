export class Serializable {

  public id: any;

  constructor() { }

  serialize(data: Object = {}, includeNullValues: boolean = false, callback: any = null) {
    if (!data) {
      return;
    }

    const keys: Array<string> = Object.keys(data);

    keys.forEach((property, index) => {
      if (includeNullValues) {
        if (data[property] === undefined) {
          return;
        }
      } else {
        if (data[property] === null || data[property] === undefined) {
          return;
        }
      }

      if (this.propertyIsDeclared(property)) {
        if (this.relationshipExists(property)) {
          this.setRelationship(property, data[property]);
        } else {
          this.set(property, data[property]);
        }
      }

      if (index == keys.length - 1) {
        if (callback) {
          callback(this);
        }
      }
    }, this);
  }

  propertyIsDeclared(property: string) {
    return !!Object.getOwnPropertyDescriptor(this, property);
  }

  relationshipExists(property: string) {
    return (Object.keys(this.relationships).indexOf(property) > -1) && (this.relationships[property] !== null);
  }

  set(property: string, value: any) {
    this[property] = value;
  }

  setRelationship(property: string, value: any) {

    const constructor = this.relationships[property];

    if (Array.isArray(value)) {
      this[property] = value.map(item => new constructor(item));
    } else {
      this[property] = new constructor(value);
    }
  }

  /**
   * Define o tipo de propriedades que devem ser serializadas
   * recursivamente, segundo exemplo:
   *
   * user: User
   *
   * A propriedade "user" será usada para instanciar uma nova classe "User".
   *
   * @return Object
   */
  get relationships(): Object {
    return {};
  }

  /**
   * Retorna dados que serão enviados para o servidor
   * a fim de persistência no banco de dados
   *
   * @return Object
   */
  get http_data(): Object {
    return {};
  }
}
