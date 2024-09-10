import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

  constructor(private ServiceRequestService:ServiceRequestService){}
  @Input() id: string='';
  movieDetails: any;
  ngOnInint(){
    this.ServiceRequestService.getMovieDetails(this.id).subscribe(res=>this.movieDetails = res);
  }
}
