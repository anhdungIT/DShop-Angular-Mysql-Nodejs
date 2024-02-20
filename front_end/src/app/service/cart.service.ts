import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCart(){
    let cartJSon = sessionStorage.getItem('cart');
    if(cartJSon){
      return JSON.parse(cartJSon);
    }
    else{
      return [];
    }
  }
  saveCart(carts:any){
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }
  totalPrice(){
    let carts = this.getCart();
    let total: number = 0;
    carts.forEach((item : any) => {
      total += item.quantity * item.price;
    });
    return total;
  }
}
