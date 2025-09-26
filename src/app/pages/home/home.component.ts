import { Component, type OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../core/components/header/header.component";
import { MovieCarouselComponent } from "src/app/core/components/movie-carousel/movie-carousel.component";
import { MovieService } from "../../shared/services/movie.service";
import { FilterPanelComponent } from "../../core/components/filter-panel/filter-panel.component";
// import { MovieFacade, MovieState } from "../../features/movies/services/movie.facade";
// import { MovieCarouselComponent } from "../../shared/components/movie-carousel/movie-carousel.component";
import { Movie as ApiMovie } from "../../features/movies/types/movie.type";
// import { Movie as CardMovie } from "../../shared/components/movie-card/movie-card.component";
import { Observable, map } from "rxjs";
import { ContentVideo } from "src/app/shared/models/video-content.interface";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MovieCarouselComponent,
    FilterPanelComponent,
  ],
})

export class HomeComponent implements OnInit {
  popularMovies: ContentVideo[] = [];
  movieService = inject(MovieService);
  genres: any[] = [];

  ngOnInit(): void {
      this.movieService.getMovies().subscribe((response) => {
          console.log(response);
          this.popularMovies = response.results;
      });

      this.movieService.getGenres().subscribe(res => {
      this.genres = res.genres;
    });
  }

  getMovieGenres(movie: any): string {
    return movie.genre_ids
      .map((id: number) => this.genres.find(g => g.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  }

  
  // private facade = inject(MovieFacade);

  // // Dados mockados para teste
  // trendingMovies: CardMovie[] = [
  //   {
  //     id: 1,
  //     title: "Spider-Man: No Way Home",
  //     poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  //     genre: "Ação/Aventura",
  //     year: 2021,
  //     rating: 5,
  //     type: "movie"
  //   },
  //   {
  //     id: 2,
  //     title: "The Batman",
  //     poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
  //     genre: "Ação/Crime",
  //     year: 2022,
  //     rating: 4,
  //     type: "movie"
  //   },
  //   {
  //     id: 3,
  //     title: "Top Gun: Maverick",
  //     poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  //     genre: "Ação/Drama",
  //     year: 2022,
  //     rating: 5,
  //     type: "movie"
  //   },
  //   {
  //     id: 4,
  //     title: "Doctor Strange 2",
  //     poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  //     genre: "Ação/Fantasia",
  //     year: 2022,
  //     rating: 4,
  //     type: "movie"
  //   },
  //   {
  //     id: 5,
  //     title: "Thor: Love and Thunder",
  //     poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  //     genre: "Ação/Aventura",
  //     year: 2022,
  //     rating: 4,
  //     type: "movie"
  //   }
  // ];

  // actionMovies: CardMovie[] = [
  //   {
  //     id: 6,
  //     title: "John Wick 4",
  //     poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  //     genre: "Ação",
  //     year: 2023,
  //     rating: 5,
  //     type: "movie"
  //   },
  //   {
  //     id: 7,
  //     title: "Fast X",
  //     poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  //     genre: "Ação/Aventura",
  //     year: 2023,
  //     rating: 4,
  //     type: "movie"
  //   },
  //   {
  //     id: 8,
  //     title: "Mission: Impossible 7",
  //     poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  //     genre: "Ação/Aventura",
  //     year: 2023,
  //     rating: 5,
  //     type: "movie"
  //   },
  //   {
  //     id: 9,
  //     title: "Transformers: Rise of the Beasts",
  //     poster: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  //     genre: "Ação/Ficção",
  //     year: 2023,
  //     rating: 4,
  //     type: "movie"
  //   },
  //   {
  //     id: 10,
  //     title: "Indiana Jones 5",
  //     poster: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
  //     genre: "Ação/Aventura",
  //     year: 2023,
  //     rating: 4,
  //     type: "movie"
  //   }
  // ];

  // marathonList: CardMovie[] = [];

  // ngOnInit(): void {
  //   // Você pode carregar dados da API se necessário
  //   // this.facade.loadPopularMovies();
  // }

  // onMovieAddedToMarathon(movie: CardMovie): void {
  //   // Verificar se o filme já está na maratona
  //   if (!this.marathonList.find(m => m.id === movie.id)) {
  //     this.marathonList.push(movie);
  //     console.log('Filme adicionado à maratona:', movie.title);
  //   }
  // }

  // onSearch(term: string): void {
  //   const q = term?.trim();
  //   if (q) {
  //     this.facade.searchMovies(q);
  //   } else {
  //     this.facade.loadPopularMovies();
  //   }
  // }
}