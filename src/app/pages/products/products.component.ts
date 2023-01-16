import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      title: "Handcrafted Concrete Ball",
      price: 191,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: {
        id: 4,
        name: "Toys",
        typeImg: "any"
      },
      images: [
        "https://placeimg.com/640/480/any?r=0.6101670715624365",
        "https://placeimg.com/640/480/any?r=0.1802271942202316",
        "https://placeimg.com/640/480/any?r=0.6459987272696954"
      ]
    },
    {
      id: 2,
      title: "Rustic Metal Soap",
      price: 643,
      description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: {
        id: 1,
        name: "Clothes",
        typeImg: "people"
      },
      images: [
        "https://placeimg.com/640/480/people?r=0.1729845586442058",
        "https://placeimg.com/640/480/people?r=0.44252335670519494",
        "https://placeimg.com/640/480/people?r=0.38295605733722726"
      ]
    },
    {
      id: 3,
      title: "Incredible Cotton Salad",
      price: 826,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      category: {
        id: 4,
        name: "Toys",
        typeImg: "any"
      },
      images: [
        "https://placeimg.com/640/480/any?r=0.411546406385801",
        "https://placeimg.com/640/480/any?r=0.3710184496183584",
        "https://placeimg.com/640/480/any?r=0.2621687002200406"
      ]
    }
  ]
  
  constructor(
    private route: ActivatedRoute
  ){}
}
