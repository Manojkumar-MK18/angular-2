import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productServices: ProductsService) {}

  ngOnInit() {
    this.productServices
      .getProducts('http://localhost:4000/getAllProducts', {})
      .subscribe((products: any) => {
        console.log(products.message);
      });
  }
}
