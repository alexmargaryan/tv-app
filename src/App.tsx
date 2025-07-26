import { useState } from "react";

import movies from "./api/movies";
import type { Movie } from "./api/types";
import MainFeaturedMovie from "./components/common/MainFeaturedMovie";
import AppSidebar from "./components/common/Sidebar";
import TrendingNow from "./components/common/TrendingNow";
import { SidebarProvider } from "./components/ui/sidebar";
import { addMovieToVisitedMovies } from "./lib/helpers";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const onMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    addMovieToVisitedMovies(movie.Id);
  };

  return (
    <SidebarProvider>
      <div className="relative h-screen w-full overflow-hidden">
        <AppSidebar />
        <MainFeaturedMovie movie={selectedMovie ?? movies.Featured} />
        <div className="absolute bottom-0 left-32">
          <h2 className="text-3xl font-medium text-white">Trending Now</h2>
          <TrendingNow onMovieClick={onMovieClick} />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
