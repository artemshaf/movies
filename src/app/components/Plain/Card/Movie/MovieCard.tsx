import { Button, Icon, Tag, Rating } from "app/components";
import { IMovieCardInterface } from "./MovieCard.interface";
import { GET_IMAGE, GET__ORIGINAL_IMAGE } from "app/helpers";
import "./MovieCard.scss";
import { useNavigate } from "react-router-dom";
import { IMovie } from "app/interfaces";
import { useMemo } from "react";
import { useGetMovieGenresQuery } from "app/services";

export const MovieCard = ({
  movie = {} as IMovie,
  className,
  ...props
}: IMovieCardInterface) => {
  const navigate = useNavigate();
  const { data } = useGetMovieGenresQuery();
  const genres = data?.genres;

  const prepareTags = useMemo(
    () =>
      genres
        ? movie.genre_ids
            .slice(0, 2)
            .map((genreId) => genres.find((item) => item.id === genreId)?.name)
        : [],
    [genres, movie]
  );

  const prepareBg = movie.poster_path
    ? {
        backgroundImage: `url("${GET_IMAGE(movie.poster_path)}")`,
      }
    : movie.backdrop_path
    ? {
        backgroundImage: `url("${GET__ORIGINAL_IMAGE(movie.backdrop_path)}")`,
      }
    : {
        backgroundImage: `url("http://2.gravatar.com/avatar/5786feb12020aedc366e6affd6a9689d?s=220&d=mm&r=g")`,
      };

  return (
    <li
      className="movie__card"
      {...props}
      style={prepareBg}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <Icon
        icon="Play"
        width="90px"
        height="90px"
        className="movie__card__icon_play"
      />
      <div className="movie__card__info">
        <ul className="movie__card__tags">
          {prepareTags.map((item) => (
            <Tag>{item}</Tag>
          ))}
        </ul>
        <Rating rating={Math.round(movie.vote_average)} />
        <h2>{movie.title}</h2>
        <Button className="movie__card__btn">
          Watch now <Icon icon="ChevronRight" />
        </Button>
      </div>
    </li>
  );
};
