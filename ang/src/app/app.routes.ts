import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './components/add-products/add-products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-product',
    component: AddProductsComponent,
  },
];
