import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Product } from '../interfaces/product';

const API_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(API_URL);
  }
}
