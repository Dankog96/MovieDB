import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: 'top-movies.component.html',
  styleUrls: ['top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  topMovies;
  isLoading = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.moviesService.getTop20().subscribe((success: any) => {
      // tslint:disable-next-line: no-string-literal
      this.topMovies = success.results;
      this.isLoading = false;
    });
  }
}
