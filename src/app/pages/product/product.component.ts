import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  currentProduct!: any
  productId: string | null = null

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
      if (this.productId) {
        this.productsService.getProductById(this.productId)
        .subscribe((data) =>
        this.currentProduct = data)
      }
    })
  }
}
