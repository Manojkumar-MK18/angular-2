import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiServices: ApiService) { }

  getProducts = (url: string, params: any): any => {
    return this.apiServices.get(url, params);
  };

  addProducts = (url: string, body: any): any => {
    return this.apiServices.post(url, body, {
      responseType: 'arraybuffer'
    });
  };
}
