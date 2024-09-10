import { Component, Input } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { Router } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, DecimalPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: any;
  faHeart = faHeart;
  constructor(private ServiceRequestService: ServiceRequestService, private router: Router) { }
  goToDetails(id: string) {
    this.router.navigate(['/movie-details', id]);
  }

  ngOnInit(): void {
    // console.log(this.movie);
  }
}
