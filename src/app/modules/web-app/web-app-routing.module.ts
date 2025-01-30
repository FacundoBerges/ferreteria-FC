import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products/products-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: 'productos', component: ProductsPageComponent },
  { path: 'productos/:category', component: ProductsPageComponent },
  { path: 'sobre-nosotros', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAppRoutingModule {}
