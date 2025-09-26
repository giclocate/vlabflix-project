import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../types/movie.type';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sortBy: 'popularity.desc',
  },
 headers: {
    accept: 'application/json',
    Authorization: 'Bearer a872e24591035a92a15f0d9b996ccc67'
  }
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', options);

  }
  // private readonly apiKey = process.env["NG_APP_API_KEY"];
  // private readonly apiUrl = 'https://api.themoviedb.org/3';

  // getPopularMovies(page = 1): Observable<MovieResponse> {
  //   console.log(this.apiKey)
  //   return this.http.get<MovieResponse>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`);
  // }

  // searchMovies(query: string, page = 1): Observable<MovieResponse> {
  //   return this.http.get<MovieResponse>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`);
  // }
}