import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = environment.apiUrl;
  private accessToken = environment.tmdbToken;
  http = inject(HttpClient);

  private getHeaders() {
    return {
      'accept': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    };
  }

  // Metodo para buscar filmes
  getMovies(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/discover/movie?language=en-US&sort_by=popularity.desc&page=1&include_adult=false&include_video=true`,
      { headers: this.getHeaders() }
    );
  }

  // Metodo para buscar lista de gêneros
  getGenres(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/genre/movie/list?language=pt-BR`, 
      { headers: this.getHeaders() }
    );
  }
}
