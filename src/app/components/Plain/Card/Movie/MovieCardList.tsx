import cn from "classnames";
import { MovieCard } from "./MovieCard";
import { IMovieCardListInterface } from "./MovieCard.interface";
import "./MovieCard.scss";

export const MovieCardList = ({
  movies = [],
  className,
  ...props
}: IMovieCardListInterface) => {
  return (
    <>
      {movies.length > 0 && (
        <ul className={cn(className, "movie__cards")} {...props}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </>
  );
};
