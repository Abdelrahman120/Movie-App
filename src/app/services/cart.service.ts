import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];  
  constructor() { }
  addToCart(movie: any) {
    const existingItem = this.cartItems.find(item => movie.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...movie, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  removeFromCart(movie: any) {
    const index = this.cartItems.findIndex(item => movie.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

}
