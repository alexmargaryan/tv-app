import type { FC } from "react";

import movies from "@/api/movies";
import type { Movie } from "@/api/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getMovies, sortMoviesByVisited } from "@/lib/helpers";

interface Props {
  onMovieClick: (movie: Movie) => void;
}

const TrendingNow: FC<Props> = ({ onMovieClick }) => {
  const sortedMovies = sortMoviesByVisited(getMovies(movies.TendingNow));

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {sortedMovies.map((movie, index) => (
          <CarouselItem key={index} className="basis-1/8">
            <div className="p-1">
              <Card
                className="w-fit cursor-pointer border-none p-0"
                onClick={() => onMovieClick(movie)}
              >
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={movie.CoverImage}
                    alt={movie.Title}
                    className="aspect-auto h-72 rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TrendingNow;
