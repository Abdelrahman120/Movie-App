import { Component, inject, Output } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
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
