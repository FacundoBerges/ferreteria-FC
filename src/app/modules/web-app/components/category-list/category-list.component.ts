import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';
import { ProductsService } from '../../services/products.service';
import { mapCategoryDtoToCategoryModel } from '../../utils/categoryMapper';

@Component({
  selector: 'fc-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  providers: [ProductsService],
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private _productsService: ProductsService) {}

  public ngOnInit() {
    this._productsService.getCategories().subscribe((categories) => {
      this.categories = categories.map(mapCategoryDtoToCategoryModel);
    });
  }
}
