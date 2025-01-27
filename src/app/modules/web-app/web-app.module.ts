import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { WebAppRoutingModule } from './web-app-routing.module';

import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductListComponent,
    ProductsPageComponent,
    MapComponent,
  ],
  imports: [CommonModule, WebAppRoutingModule],
  providers: [provideHttpClient()],
})
export class WebAppModule {}
