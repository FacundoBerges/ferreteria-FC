import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { env } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private API_URL = `${env.API_URL}/categories`;

  constructor(private _httpClient: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(this.API_URL);
  }
}
