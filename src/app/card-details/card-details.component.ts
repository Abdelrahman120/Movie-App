// import { Component, Input } from '@angular/core';
// import { ServiceRequestService } from '../services/service-request.service';
// import { ActivatedRoute, Route } from '@angular/router';

// @Component({
//   selector: 'app-card-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './card-details.component.html',
//   styleUrl: './card-details.component.css'
// })
// export class CardDetailsComponent {
//   @Input() id: any='';
//   movieDetails: any;
//   movieRecommendations: any;
//   constructor(private ServiceRequestService:ServiceRequestService , private route:ActivatedRoute){}


//   ngOnInit() {
//     this.id = this.route.snapshot.paramMap.get('id') || '';
//     if (this.id) {
//       this.ServiceRequestService.getMovieDetails(this.id).subscribe((res: any) => {
//         this.movieDetails = res;
//       }, error => {
//         console.error("Error fetching movie details", error);
//       });
//     }
    
//   }
// }



import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Route } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { RecommendationsComponent } from "../recommendations/recommendations.component";

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf, RecommendationsComponent],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input() id: any='';
  movieDetails: any;
  faSolidStar=faSolidStar;
  faLink = faLink ;
 movieRecommendations: any;

  constructor(private ServiceRequestService:ServiceRequestService , private route:ActivatedRoute){}


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.ServiceRequestService.getMovieDetails(this.id).subscribe((res: any) => {
        this.movieDetails = res;
      }, error => {
        console.error("Error fetching movie details", error);
      });
    }
    // if (this.id) {
    //   this.ServiceRequestService.getRecommendations(this.id).subscribe((res: any) => {
    //     this.movieRecommendations = res.results;
    //   }, error => {
    //     console.error("Error fetching movie recommendations", error);
    //   });
    // }
  }
  getFlooredRating(rating: number): number[] {
    return new Array(Math.floor(rating));
  }
}