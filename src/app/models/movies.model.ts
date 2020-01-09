export class MoviesModel {
  title: string;
  poster_path: string;
  release_date: string;
  genre: any;
  id: string;
  overview: string;
  vote_average: string;

  constructor(title: string, posterPath: string, releaseDate: string, genre: string[], id: string, overview: string, averageVote: string) {
    this.title = title;
    this.poster_path = posterPath;
    this.release_date = releaseDate;
    this.genre = genre;
    this.id = id;
    this.overview = overview;
    this.vote_average = averageVote;
  }
}
