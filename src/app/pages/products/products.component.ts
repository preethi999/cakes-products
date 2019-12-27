import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allproducts = []
  constructor(private c:ServiceService) { }

  ngOnInit() {
    this.allproducts = this.c.products;
  }
  addToCart(product){
    if(this.c.cart.hasOwnProperty(product.id)){
      this.c.cart[product.id].quantity += 1
    }else{
      this.c.cart[product.id] = product
    }
    console.log(this.c.cart)
  }
}


