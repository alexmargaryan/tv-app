import { PlayIcon } from "lucide-react";
import { useEffect, useState, type FC } from "react";

import type { Movie } from "@/api/types";
import { Button } from "@/components/ui/button";
import { formatDuration } from "@/lib/helpers";
import { cn } from "@/lib/utils";

interface Props {
  movie: Omit<Movie, "VideoUrl"> & {
    VideoUrl?: string;
  };
}

const MainFeaturedMovie: FC<Props> = ({ movie }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(false);
    if (movie.VideoUrl) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [movie.VideoUrl, movie.Id]);

  return (
    <>
      <img
        src={movie.CoverImage}
        alt="cover-image"
        className={cn(
          "absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000",
          showVideo ? "opacity-0" : "opacity-100"
        )}
      />
      {movie.VideoUrl && (
        <video
          src={movie.VideoUrl}
          autoPlay
          muted
          loop
          className={cn(
            "absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000",
            showVideo ? "opacity-100" : "opacity-0"
          )}
        />
      )}
      <div className="absolute top-20 left-32 flex flex-col gap-2">
        <p className="text-xl font-semibold text-[#858688] uppercase">
          {movie.Category}
        </p>
        <img
          src={movie.TitleImage}
          alt={movie.Title}
          className="aspect-auto h-20 self-start object-contain"
        />
        <div className="flex flex-col gap-1 text-lg font-medium text-white">
          <div className="flex items-center gap-4">
            <span>{movie.ReleaseYear}</span>
            <span>{movie.MpaRating}</span>
            <span>{formatDuration(movie.Duration)}</span>
          </div>
          <span className="max-w-[44rem]">{movie.Description}</span>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Button className="w-48 rounded-4xl bg-white px-2 py-7 text-2xl font-semibold text-black hover:bg-white/80">
            <PlayIcon className="h-6 w-6" />
            Play
          </Button>
          <Button className="w-48 rounded-4xl bg-gradient-to-r from-[#2126e8] to-[#021a7d] px-2 py-7 text-2xl font-semibold text-white hover:bg-gradient-to-r hover:from-[#2126e8]/80 hover:to-[#021a7d]/80">
            More Info
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainFeaturedMovie;
