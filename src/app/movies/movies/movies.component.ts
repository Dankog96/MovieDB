import { OnInit, Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MoviesModel } from '../../models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MoviesModel;
  isLoading = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.moviesService.getMovies().subscribe(
      success => {
        // tslint:disable-next-line: no-string-literal
        this.movies = success['results'];
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
