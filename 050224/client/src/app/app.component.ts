// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}




