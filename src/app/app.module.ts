import { AppRoutingModule } from './router/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TopMoviesDetailsComponent } from './movies/top-movies/top-movies-details/top-movies-details.component';
import { LoaderIndicatorComponent } from './shared/loader-indicator/loader-indicator.component';
import { EditMovieComponent } from './movies/movie-edit/movie-edit.component';
import { TopMoviesComponent } from './movies/top-movies/top-movies.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DropDownDirective } from './shared/shared.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    EditMovieComponent,
    TopMoviesComponent,
    TopMoviesDetailsComponent,
    LoaderIndicatorComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
