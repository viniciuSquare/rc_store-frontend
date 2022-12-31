import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Movement } from './models/movement';
import { MovementType } from './models/movementType';

@Injectable({ providedIn: 'root' })
export class movementService extends BaseService {
  protected url: string = 'api/movements';

  constructor(injector: Injector) {
    super();
    this.http = injector.get(HttpClient);
  }

  getMovements(id = ""): Promise<any> {
    return this.http.get(this.buildUrl() + '/' + id).toPromise()
    .then( (response: any) => {
      return response.data.map( movement => new Movement(movement) )
    });
    ;
  }

  getMovementTypes(operator: 1|0 = null): Promise<any> {
    const urlParams = operator != null
      ? `?operator=${operator}`
      : ""

    return this.http.get(this.buildUrl('types' + urlParams))
      .toPromise()
      .then( (response: any) => {
        return response.data.map( type => new MovementType(type) )
      }).catch(e => console.log(e));
  }

  storeType(type: MovementType): Promise<any> {
    return this.http.post(this.buildUrl("types") , type.http_data )
      .toPromise();
  }
}
