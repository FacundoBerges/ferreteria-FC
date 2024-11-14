import { Component, HostListener, OnInit } from '@angular/core';

import { HeaderItem } from '../../interfaces/HeaderItem.interfaces';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _headerItems: HeaderItem[] = [
    { itemName: 'Inicio', itemUrl: '/' },
    { itemName: 'Productos', itemUrl: '/productos' },
    { itemName: 'Contacto', itemUrl: '/contacto' },
    { itemName: 'Sobre nosotros', itemUrl: '/sobre-nosotros' },
  ];
  private _screenWidth: number = window.innerWidth;
  private _maxMediumScreenSize: number = 768;
  public isMenuOpen: boolean = false;

  get headerItems(): HeaderItem[] {
    return [...this._headerItems];
  }

  get isMediumScreen(): boolean {
    return this._screenWidth <= this._maxMediumScreenSize;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._screenWidth = window.innerWidth;
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
