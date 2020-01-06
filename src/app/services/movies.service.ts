import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MoviesService {
  private path = 'https://api.themoviedb.org/3/';
  private moviesInTheaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  private top20 = 'discover/movie?sort_by=popularity.desc';
  private auth = '&api_key=';
  private movieAuth = '?api_key=';
  private movie = 'movie/';
  private apiKey = '1707047ad46cd363741b800721fb37ba';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${this.path}${this.moviesInTheaters}${this.auth}${this.apiKey}`, );
  }

  getSelectedMovie(id) {
    return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${this.apiKey}`);
  }

  getTop20() {
    return this.http.get(`${this.path}${this.top20}${this.auth}${this.apiKey}`);
  }
}
