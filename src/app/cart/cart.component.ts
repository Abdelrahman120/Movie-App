import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartItems: any[] = [];
constructor(private cartService: CartService) { }

ngOnInit(): void {

  

  this.cartItems = this.cartService.getCartItems();
}

clearCart() {
  this.cartService.clearCart();
  this.cartItems = [];
}

removeFromCart(movie: any) {
  this.cartService.removeFromCart(movie);
  this.cartItems = this.cartItems.filter((item) => item.id !== movie.id);
}
}
