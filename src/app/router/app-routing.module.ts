import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopMoviesDetailsComponent } from '../movies/top-movies/top-movies-details/top-movies-details.component';
import { EditMovieComponent } from '../movies/movie-edit/movie-edit.component';
import { TopMoviesComponent } from '../movies/top-movies/top-movies.component';
import { RegisterComponent } from '../register/register.component';
import { MoviesComponent } from '../movies/movies.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MoviesComponent },
  { path: 'movie-edit/:id', component: EditMovieComponent },
  { path: 'top-movies', component: TopMoviesComponent},
  { path: 'top-movie-detail/:id', component: TopMoviesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
