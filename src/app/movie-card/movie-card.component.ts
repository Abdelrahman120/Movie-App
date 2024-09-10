import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
@Input() movie: any;
constructor(private ServiceRequestService:ServiceRequestService , private router:Router){ }
goToDetails(id:string){
  this.router.navigate(['/moviedetails',id]);
}
}
