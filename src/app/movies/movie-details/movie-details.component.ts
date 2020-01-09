import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesModel } from 'src/app/models/movies.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-details.component.html',
  styleUrls: ['movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails = new MoviesModel('', '', '', [''], '', '', '');
  isLoading = false;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.isLoading = true;

    this.route.params.subscribe( movie => {
      const id = movie.id;

      this.moviesService.getSelectedMovie(id).subscribe( (selectedMovie: any) => {
        this.movieDetails = selectedMovie;
        this.movieDetails.genre = selectedMovie.genres.map( genre => {
          return genre.name;
        });

        this.isLoading = false;
      });
    });
  }

  getBack() {
    this.location.back();
  }
}
