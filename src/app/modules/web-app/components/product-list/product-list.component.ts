import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../models/category.model';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { mapCategoryDtoToCategoryModel } from '../../utils/categoryMapper';

@Component({
  selector: 'fc-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit {
  public products?: Product[];
  public categories?: Category[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  public ngOnInit() {
    const category = this._activatedRoute.snapshot.paramMap.get('category');

    console.log('Category:', category);

    if (category) {
      this._productsService
        .getProductsByCategory(category)
        .subscribe((products) => {
          this.products = products;
        });
    }

    this._productsService.getCategories().subscribe((categories) => {
      this.categories = categories.map(mapCategoryDtoToCategoryModel);
    });
  }
}
