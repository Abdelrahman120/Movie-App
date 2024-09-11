import { Component, inject } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MovieInterface } from '../interfaces/movie-interface';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  constructor(private router: Router) { }
  private ServiceRequestService = inject(ServiceRequestService)
  movie: MovieInterface[] = [];
  pageNumber = 1;


  ngOnInit() {
    // this.ServiceRequestService.getAllMovies().subscribe((res: any) => this.movie = res.results);
    this.filterMovies()

  }
  goToDetails(id: string) {
    this.router.navigate(['/movie-details', id]);
  }

  paginationPrev() {
    if (this.pageNumber > 1) {
      this.pageNumber -= 1;
    }
    this.filterMovies();
  }

  paginationNext() {
    this.pageNumber += 1;
    this.filterMovies();
  }

  filterMovies() {
    this.ServiceRequestService.filteredMovies(`${this.pageNumber}`).subscribe((res: any) => {
      this.movie = res.results; console.log(res);
    }
    );
  }
}
