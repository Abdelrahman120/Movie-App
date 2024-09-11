import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceRequestService } from '../services/service-request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  text = '';
  title = {};
  constructor(private ActivatedRoute: ActivatedRoute,private ServiceRequestService: ServiceRequestService, private router: Router) { }

  search() {
    this.router.navigate(['/search-result', this.text]);
  }
ngOnInit(): void {
  this.text = this.ActivatedRoute.snapshot.params['name'];
  this.ServiceRequestService.searchResult(this.text).subscribe((res) => {
    // console.log(res);
    this.title = res.results;
    console.log(this.title);
    
  });
}
}
