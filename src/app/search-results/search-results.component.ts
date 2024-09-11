import { Component } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  constructor(private ServiceRequestService: ServiceRequestService) { }


}
