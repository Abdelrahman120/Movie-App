import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';
import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, DecimalPipe , NgClass],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  isInWatchlist: boolean = false;
  @Input() movie: any;
  faHeart = faHeart;
  constructor(private cartService: CartService ,private ServiceRequestService: ServiceRequestService, private router: Router) { }

  goToDetails(id: string) {
    this.router.navigate(['/movie-details', id]);
  }
  addToCart(movie: any) {
    this.cartService.addToCart(movie);
    this.isInWatchlist = true;
  }
  isMovieInWatchlist(movieId: string): boolean {
    const cartItems = this.cartService.getCartItems();
    return cartItems.some(item => item.id === movieId);
  }
  ngOnInit(): void {
    this.isInWatchlist = this.isMovieInWatchlist(this.movie.id);
    // console.log(this.movie);
  }
}
