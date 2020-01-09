import { OnInit, Component } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';
import { MoviesModel } from '../../../models/movies.model';

@Component({
  selector: 'app-drama-movies',
  templateUrl: 'drama-movies.component.html',
  styleUrls: ['drama-movies.component.css']
})
export class DramaMoviesComponent implements OnInit {
  movies: MoviesModel;
  isLoading = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.isLoading = true;

    this.moviesService.getBestDramas().subscribe( (movies: any) => {
      this.movies = movies.results;
      this.isLoading = false;
    });
  }
}
