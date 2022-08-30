import { Button, Icon, Loader, MainSwiper } from "app/components";
import {
  useGetMovieInTrendQuery,
  useGetTheMostPopularQuery,
  useGetTopRatedQuery,
} from "app/services";
import { shuffledArrayAndSelected } from "app/helpers";
import { IHomePageInterace } from "./HomePage.interace";
import { IMovie } from "app/interfaces";
import { SwiperMovieCard, InputSearch } from "app/components";
import "./HomePage.scss";
import { MoviesPage } from "../MoviesPage";

export const HomePage = ({ className, ...props }: IHomePageInterace) => {
  const { data: mostPopular, isLoading: isLoadingPopular } =
    useGetTheMostPopularQuery();
  const { data: inTrend, isLoading: isLoadingTrend } =
    useGetMovieInTrendQuery();
  const { data: TopRated, isLoading: isLoadingTopRated } =
    useGetTopRatedQuery();

  return mostPopular && inTrend ? (
    <section className="home-page" {...props}>
      <InputSearch />
      <MainSwiper
        items={
          mostPopular?.results === undefined
            ? []
            : shuffledArrayAndSelected<IMovie>(
                mostPopular?.results.length > 0
                  ? [...mostPopular?.results!]
                  : [],
                3
              )
        }
      />
      <Button className="home-page__titles">
        Now in trend <Icon icon="ChevronRight" />
      </Button>
      <SwiperMovieCard
        swiperProps={{
          loop: true,
          autoplay: {
            delay: 3000,
          },
        }}
        items={isLoadingTrend ? [] : inTrend?.results!}
        style={{ height: "400px" }}
      />
      <Button className="home-page__titles">
        Top rated <Icon icon="ChevronRight" />
      </Button>
      <SwiperMovieCard
        items={isLoadingTopRated ? [] : TopRated?.results!}
        swiperProps={{
          loop: true,
          autoplay: {
            delay: 3000,
          },
        }}
      />
      <MoviesPage />
    </section>
  ) : (
    <>
      <Loader />
    </>
  );
};
