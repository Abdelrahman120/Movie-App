import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { DatePipe, NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartItems: any[] = [];
faStar = faStar;
  faHeart = faHeart;
constructor(private cartService: CartService, private router: Router) { }

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
goBack() {
  this.router.navigate(['/']);
}
}
