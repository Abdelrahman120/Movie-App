import { Component } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../interfaces/movie-interface';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  constructor(private ServiceRequestService: ServiceRequestService, private ActivatedRoute: ActivatedRoute) { }
  searchText!: string;
  searchResult: MovieInterface[]=[];
  title = ''
  ngOnInit(): void {
    this.title = this.ActivatedRoute.snapshot.params["name"];
    console.log(this.title);
    this.ServiceRequestService.searchResult(this.title).subscribe((res) => {

    })
  }
}
