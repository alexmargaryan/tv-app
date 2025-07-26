import GenreIcon from "@/assets/icons/genre.png";
import HomeIcon from "@/assets/icons/home.png";
import MovieIcon from "@/assets/icons/movie.png";
import SearchIcon from "@/assets/icons/search.png";
import TvShowIcon from "@/assets/icons/tv-show.png";
import WatchLaterIcon from "@/assets/icons/watch-later.png";

export const NAVIGATION_OPTIONS: {
  title: string;
  icon: string;
}[] = [
  {
    title: "Search",
    icon: SearchIcon,
  },
  {
    title: "Home",
    icon: HomeIcon,
  },
  {
    title: "TV Shows",
    icon: TvShowIcon,
  },
  {
    title: "Movies",
    icon: MovieIcon,
  },
  {
    title: "Genres",
    icon: GenreIcon,
  },
  {
    title: "Watch Later",
    icon: WatchLaterIcon,
  },
];

export const NAVIGATION_OPTIONS_GENERAL = [
  "LANGUAGE",
  "GET HELP",
  "EXIT",
] as const;
