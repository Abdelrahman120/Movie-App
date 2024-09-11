import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CardDetailsComponent } from "./card-details/card-details.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, CardDetailsComponent, NavbarComponent, SearchBarComponent, RecommendationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie-App';

}
