import { Component, HostListener } from '@angular/core';

import { HeaderItem } from '../../interfaces/HeaderItem.interfaces';

const HEADER_ITEMS: HeaderItem[] = [
  { itemName: 'Inicio', itemUrl: '/' },
  { itemName: 'Sobre nosotros', itemUrl: '/sobre-nosotros' },
  { itemName: 'Productos', itemUrl: '/productos' },
  { itemName: 'Contacto', itemUrl: '/contacto' },
];

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _screenWidth: number = window.innerWidth;
  private _maxMenuButtonScreenSize: number = 640;
  public isMenuOpen: boolean = false;

  get headerItems(): HeaderItem[] {
    return [...HEADER_ITEMS];
  }

  get isMediumScreen(): boolean {
    return this._screenWidth <= this._maxMenuButtonScreenSize;
  }

  @HostListener('window:resize', ['$event'])
  private _onResize(): void {
    this._screenWidth = window.innerWidth;
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
