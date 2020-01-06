import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesModel } from 'src/app/models/movies.model';

@Component({
  selector: 'app-top-movies-details',
  templateUrl: 'top-movies-details.component.html',
  styleUrls: ['top-movies-details.component.css']
})
export class TopMoviesDetailsComponent implements OnInit {
  movieDetails = new MoviesModel('', '', '', [''], '', '', '');
  isLoading = false;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe( movie => {
      const id = movie.id;
      this.moviesService.getSelectedMovie(id).subscribe((selectedMovie: any) => {
        this.movieDetails.genre = selectedMovie.genres.map( genre => {
          return genre.name;
        }),
        this.movieDetails.id = selectedMovie.id;
        this.movieDetails.overview = selectedMovie.overview;
        this.movieDetails.release_date = selectedMovie.release_date;
        this.movieDetails.vote_average = selectedMovie.vote_average;
        this.movieDetails.title = selectedMovie.title;
        this.movieDetails.poster_path = selectedMovie.poster_path;
        this.isLoading = false;
      });
    });
  }

  getBack() {
    this.router.navigate(['/top-movies'], {relativeTo: this.route});
  }
}
