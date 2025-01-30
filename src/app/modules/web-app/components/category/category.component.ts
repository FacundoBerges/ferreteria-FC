import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';

@Component({
  selector: 'fc-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  @Input()
  public category?: Category;

  public ngOnInit(): void {
    if (!this.category) throw new Error('Product is required');
  }

  public goToCategory(name: string): void {
    console.log('Category name:', name);
  }
}
