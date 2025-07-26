import type { Movie } from "@/api/types";

export const formatDuration = (duration: string): string => {
  if (!duration) return "";

  if (duration === "0") return "0m";

  const hours = Math.floor(parseInt(duration) / 3600);
  const minutes = Math.floor((parseInt(duration) % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
};

export const addMovieToVisitedMovies = (movieId: string) => {
  const visitedMovies = sessionStorage.getItem("visitedMovies");
  const parsedVisitedMovies: string[] = visitedMovies
    ? JSON.parse(visitedMovies)
    : [];

  if (!parsedVisitedMovies.length) {
    sessionStorage.setItem("visitedMovies", JSON.stringify([movieId]));

    return;
  }

  const existingMovieIndex = parsedVisitedMovies.findIndex(
    (id) => id === movieId
  );

  if (existingMovieIndex === -1) {
    sessionStorage.setItem(
      "visitedMovies",
      JSON.stringify([...parsedVisitedMovies, movieId])
    );
  } else {
    const filteredVisitedMovies = parsedVisitedMovies.filter(
      (id) => id !== movieId
    );
    sessionStorage.setItem(
      "visitedMovies",
      JSON.stringify([...filteredVisitedMovies, movieId])
    );
  }
};

export const getVisitedMovies = (): string[] => {
  const visitedMovies = sessionStorage.getItem("visitedMovies");
  return visitedMovies ? JSON.parse(visitedMovies) : [];
};

export const sortMoviesByVisited = (movies: Movie[]) => {
  const visitedMovies = getVisitedMovies();
  const moviesCopy = [...movies];

  return moviesCopy.sort((a, b) => {
    return visitedMovies.indexOf(b.Id) - visitedMovies.indexOf(a.Id);
  });
};

export const getMovies = (movies: Movie[]) => {
  const moviesCopy = [...movies];

  return moviesCopy
    .sort((a, b) => {
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    })
    .slice(0, 50);
};
