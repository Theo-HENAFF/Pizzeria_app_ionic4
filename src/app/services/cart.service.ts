import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RestService } from '../rest.service';


export interface Product {
  id: number;
  title: string;
  price: number;
  amount: number;
  plat_du_jour: boolean;
  url: string;
  description: string;

}
@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    // tslint:disable-next-line:prefer-const
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    // tslint:disable-next-line:prefer-const
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        // tslint:disable-next-line:triple-equals
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  convertToProduct(pizza) {
    const produit = {
      id: pizza._id,
      title: pizza.title,
      price: pizza.price,
      amount: pizza.amount,
      plat_du_jour: pizza.plat_du_jour,
      url: pizza.url,
      description : pizza.description};
    return produit;
  }
}
