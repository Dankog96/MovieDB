import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: 'movie-edit.component.html',
  styleUrls: ['movie-edit.component.css']
})
export class EditMovieComponent implements OnInit {
  selectedMovie;
  isLoading = false;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(movie => {
      const id = movie.id;
      this.moviesService.getSelectedMovie(id).subscribe( myMovie => {
        this.selectedMovie = myMovie;
        this.isLoading = false;
      });
    });
  }

  getBack() {
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
}
