import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
  {
    path: 'moviedetails/:id',
    component: CardDetailsComponent,
    title: 'Movie Details',
  },
  {
    path: '',
    component: MovieListComponent
  },

];
