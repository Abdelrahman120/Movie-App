import { Component } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../interfaces/movie-interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchBarComponent, MovieCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  constructor(
    private ServiceRequestService: ServiceRequestService,
    private ActivatedRoute: ActivatedRoute
  ) { }
  searchText!: string;
  searchResult: MovieInterface[] = [];
  title = '';
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.title = params['name'];

      this.ServiceRequestService.searchResult(this.title).subscribe((res) => {
        this.searchResult = res.results;
      });
    });
  }


}
