import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input() id: any='';
  movieDetails: any;
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
  }
}
