import { Component, inject, Output } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  constructor(private router:Router) { }
  private ServiceRequestService=inject(ServiceRequestService)
  movie:any;
  ngOnInit() {
    this.ServiceRequestService.getAllMovies().subscribe((res :any)=>this.movie = res.results);
  }
  goToDetails(id:string){
    this.router.navigate(['/moviedetails',id]);
  }
}
