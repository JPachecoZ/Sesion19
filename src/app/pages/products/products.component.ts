import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productId: string | null = null;
  products: Product[] = [];
  pokemon!: any

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
      console.log(this.productId)
    })
    
    this.productsService.getAllProducts().subscribe((data) =>
    this.pokemon = data)
    
    if (this.productId){
      console.log(this.productsService.getProductById(this.productId))
    }
  }
}
