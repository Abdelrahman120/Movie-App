import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLink,
  faStar as faSolidStar,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DetailsInterface } from '../interfaces/details-interface';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import {faStar} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf,RecommendationsComponent,CommonModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent {
  @Input() id: any = '';
  movieDetails: DetailsInterface = {} as DetailsInterface;
  faSolidStar = faSolidStar;
  faLink = faLink;
  faStar = faStar;
  constructor(
    private ServiceRequestService: ServiceRequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.ServiceRequestService.getMovieDetails(this.id).subscribe(
        (res: any) => {
          this.movieDetails = res;
        },
        (error) => {
          console.error('Error fetching movie details', error);
        }
      );
    }
  }
  getFlooredRating(rating: number): number[] {
    return new Array(Math.floor(rating));
  }
}
