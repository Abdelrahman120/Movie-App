import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private cartService: CartService) { }
  faHeart = faHeart;

  get cartLength(): number {
    return this.cartService.getCartItems().length;
  }

}
