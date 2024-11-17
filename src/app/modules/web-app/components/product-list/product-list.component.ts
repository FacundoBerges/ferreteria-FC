import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'fc-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit {
  public products?: Product[] = [];

  constructor(private _productsService: ProductsService) {}

  public ngOnInit() {
    this._productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
