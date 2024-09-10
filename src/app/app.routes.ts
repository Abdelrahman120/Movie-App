import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'movie-details/:id',
    component: CardDetailsComponent,
    title: 'Movie Details',
  },
  {
    path: 'search-results/:title',
    component: SearchResultsComponent,
    title: "Search result",
  }
];
