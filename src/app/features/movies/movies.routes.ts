import { Routes } from '@angular/router';
import { MovieListComponent } from '../../shared/components/movie-list/movie-list.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];
