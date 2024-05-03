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
    this.productServices.getProducts('', {}).subscribe((products: any) => {
      console.log(products);
    });
  }
}
