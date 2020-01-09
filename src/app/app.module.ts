import { AppRoutingModule } from './router/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DramaMoviesComponent } from './movies/movie-genres/drama-movies/drama-movies.component';
import { LoaderIndicatorComponent } from './shared/loader-indicator/loader-indicator.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TopMoviesComponent } from './movies/top-movies/top-movies.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies/movies.component';
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
    MovieDetailsComponent,
    TopMoviesComponent,
    LoaderIndicatorComponent,
    DramaMoviesComponent,
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
