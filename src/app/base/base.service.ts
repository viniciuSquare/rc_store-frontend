import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Serializable } from './serialazable';
import { environment } from '../../environments/environment';

export class BaseService {
  protected url: string;
  protected api_url: string = 'http://localhost:8000';
  protected http: HttpClient;

  constructor() { }

  get base_url() {
    return `${this.api_url}/${this.url}`;
  }

  buildUrl(path: any = '') {
    return `${this.base_url}${path}`;
  }

  useUrl(path: any) {
    return `${this.api_url}/${path}`;
  }

  get(query_params: string = ''): Promise<any> {
    query_params = encodeURI(query_params);
    return this.http.get(this.buildUrl('') + query_params).toPromise();
  }

  getById(id: string): Promise<any> {
    return this.http.get(this.buildUrl('/' + id)).toPromise();
  }

  store(model: Serializable): Promise<any> {
    return this.http.post(this.buildUrl(), model.http_data).toPromise();
  }

  update(model: Serializable): Promise<any> {
    return this.http.put(this.buildUrl('/' + model.id), model.http_data).toPromise();
  }

  delete(id: any): Promise<any> {
    return this.http.delete(this.buildUrl('/' + id)).toPromise();
  }
}
