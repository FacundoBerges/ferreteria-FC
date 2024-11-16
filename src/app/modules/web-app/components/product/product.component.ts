import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'fc-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input()
  public product?: Product;

  public ngOnInit(): void {
    if (!this.product) throw new Error('Product is required');
  }
}
