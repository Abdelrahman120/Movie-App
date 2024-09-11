import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  text = '';
  constructor(private ServiceRequestService: ServiceRequestService, private router: Router) { }

  search() {
    this.router.navigate(['/search-result', this.text]);
  }
  ngOnInit(): void {
    this.ServiceRequestService.searchResult(this.text).subscribe((res) => {
      this.text = res.title;
      console.log(res);
    })
  }
}
