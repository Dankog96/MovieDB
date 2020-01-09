import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMovieComponent } from '../movies/movie-edit/movie-edit.component';
import { TopMoviesComponent } from '../movies/top-movies/top-movies.component';
import { RegisterComponent } from '../register/register.component';
import { MoviesComponent } from '../movies/movies.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  { path: 'movie-details/:id', component: EditMovieComponent },
  { path: 'top-movies', component: TopMoviesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MoviesComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
