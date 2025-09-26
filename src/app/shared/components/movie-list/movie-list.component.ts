import { Component, OnInit, inject } from '@angular/core';
// import { MovieFacade, MovieState } from '../../../features/movies/services/movie.facade';
import { Movie } from '../../../features/movies/types/movie.type';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { CarouselItem } from 'src/app/core/components/carousel/carousel.component';
import { CarouselComponent } from 'src/app/core/components/carousel/carousel.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule, 
  ]
})
export class MovieListComponent  {
  // facade = inject(MovieFacade);
  // searchControl = new FormControl('');

  // popularMovies: CarouselItem[] = [];
  // topRatedMovies: CarouselItem[] = [];
  // upcomingMovies: CarouselItem[] = [];
  // nowPlayingMovies: CarouselItem[] = [];

  // ngOnInit() {
  //   this.loadMovieCategories();

  //   this.searchControl.valueChanges.pipe(
  //     startWith(''),
  //     debounceTime(300),
  //     distinctUntilChanged()
  //   ).subscribe(query => {
  //     if (query) {
  //       this.facade.searchMovies(query);
  //     } else {
  //       this.facade.loadPopularMovies();
  //     }
  //   });
  // }

  // private loadMovieCategories() {
  //   // Load popular movies
  //   this.facade.loadPopularMovies();

  //   // Subscribe to the movie state
  //   this.facade.movies$.subscribe((state: MovieState) => {
  //     if (state.movies.length > 0) {
  //       const movies = state.movies.map((movie: Movie) => ({
  //         id: movie.id,
  //         title: movie.title,
  //         imgSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  //         link: `/movie/${movie.id}`,
  //         rating: (movie.vote_average / 10) * 100, // Convert to percentage for star rating
  //         vote: movie.vote_average
  //       }));

  //       // Distribute movies across different categories
  //       // In a real app, you'd have separate API calls for each category
  //       this.popularMovies = movies;
  //       this.topRatedMovies = movies.filter((_, index) => index % 2 === 0).slice(0, 10);
  //       this.upcomingMovies = movies.filter((_, index) => index % 3 === 0).slice(0, 10);
  //       this.nowPlayingMovies = movies.filter((_, index) => index % 4 === 0).slice(0, 10);
  //     }
  //   });
  // }
}