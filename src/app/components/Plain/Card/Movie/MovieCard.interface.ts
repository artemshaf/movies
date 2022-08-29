import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IMovie } from "app/interfaces/movie.interface";

export interface IMovieCardInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  movie: IMovie;
}

export interface IMovieCardListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  movies: IMovie[];
}
