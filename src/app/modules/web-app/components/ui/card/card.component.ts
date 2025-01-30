import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../interfaces/product';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'fc-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input()
  public item?: Product | Category;
  @Input()
  public itemType?: string;

  public ngOnInit(): void {
    if (!this.item) throw new Error('Item is required');
  }

  public handleClick(): void {
    console.log(`${this?.itemType} id:`, this.item?.id);
  }
}
