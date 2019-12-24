import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  mycart = []
  total = 0;
  constructor(private c:ServiceService) { }

  ngOnInit() {
    this.mycart = Object.values(this.c.cart);
    this.getTotal();
  }

  getTotal(){
    this.total = 0;
    for(let i=0;i<this.mycart.length;i++){
      this.total += this.mycart[i].price*this.mycart[i].quantity;
    }
  }
 

  decreaseQuanity(cid){
    if(this.c.cart[cid].quantity>1){
      this.c.cart[cid].quantity -= 1
    }else{
      delete this.c.cart[cid];
    }
    this.mycart = Object.values(this.c.cart);
    this.getTotal()
  }
  increaseQuanity(cid){
    this.c.cart[cid].quantity += 1
    this.mycart = Object.values(this.c.cart);
    this.getTotal()
}
}
