export type Movie = {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
};

export type MoviesDto = {
  Featured: Omit<Movie, "VideoUrl">;
  TendingNow: Movie[];
};
