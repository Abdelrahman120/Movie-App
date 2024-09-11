import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Route } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
 declare var $: any;
// import * as $ from 'jquery';  // Import jQuery
@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [NgFor,FontAwesomeModule,DatePipe, DecimalPipe],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
 
  @Input() id: any='';
  movieRecommendations: any
  constructor(private ServiceRequestService:ServiceRequestService ,private route:ActivatedRoute){}


  faHeart=faHeart ;


  ngOnInit() {
    
     this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.ServiceRequestService.getRecommendations(this.id).subscribe((res: any) => {
        console.log("Data fetched from service:", res);
        this.movieRecommendations = res.results;
        console.log( this.movieRecommendations);

      }, error => {
        console.error("Error fetching movie recommendations", error);
      });
    }
    console.log( this.movieRecommendations);

  }
  ngAfterViewInit() {
    setTimeout(() => {
    $('.carousel').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 900, 
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
,
{
  breakpoint: 768, 
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1
  }
}     
,
{
  breakpoint: 600, 
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1
  }
}    ]
    });
  }, 1000);
  }
}