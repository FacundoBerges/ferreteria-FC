import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';
import { env } from '../environments/environment';
import { CategoryDTO } from '../interfaces/category.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_URL = env.API_URL;

  constructor(private _httpClient: HttpClient) {}

  public getCategories(): Observable<CategoryDTO[]> {
    return this._httpClient.get<CategoryDTO[]>(`${this.API_URL}/categories`);
  }

  public getProductsByCategory(category: string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(
      `${this.API_URL}/products/${category}`
    );
  }
}
