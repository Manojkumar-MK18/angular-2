import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsComponent } from '../components/products/products.component';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productServices: ProductsService) {}
  products: Array<Product> = [];
  ngOnInit() {
    this.productServices
      .getProducts('http://localhost:4000/getAllProducts', {})
      .subscribe((products: any) => { 
        this.products = products?.message;
      }); 
  }
}
