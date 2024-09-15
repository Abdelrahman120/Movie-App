import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RecommendationInterface } from '../interfaces/recommendation-interface';
import { CartService } from '../services/cart.service';
declare var $: any;

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, DatePipe, DecimalPipe, RouterLink],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  @Input() id: any = '';
  movieRecommendations: RecommendationInterface[] = [];
  faHeart = faHeart;

  constructor(
    private serviceRequestService: ServiceRequestService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.fetchRecommendations(); 
    });
  }

  fetchRecommendations() {
    if (this.id) {
      this.serviceRequestService.getRecommendations(this.id).subscribe(
        (res: any) => {
          this.movieRecommendations = res.results;
        },
        
      );
    }
  }

  addToCart(movie: any) {
    this.cartService.addToCart(movie);
  }

  goToDetails(id: number) {
    this.router.navigate(['/movie-details', Number(id)]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }, 1000);
  }
}
