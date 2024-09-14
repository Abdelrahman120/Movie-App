import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  text = '';
  pageNumber = 1;
  title = {};
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private ActivatedRoute: ActivatedRoute, private ServiceRequestService: ServiceRequestService, private router: Router) { }

  search() {
    this.router.navigate(['/search-result', this.text]);
  }
  ngOnInit(): void {
    this.fetchResult();
  }

  fetchResult() {
    this.text = this.ActivatedRoute.snapshot.params['name'];
    this.ServiceRequestService.searchResult(this.text, `${this.pageNumber}`).subscribe((res) => {
      this.title = res.results;
    });
  }
}
