import { Button, Icon, MainSwiper } from "app/components";
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

export const HomePage = ({ className, ...props }: IHomePageInterace) => {
  const { data: mostPopular, isLoading: isLoadingPopular } =
    useGetTheMostPopularQuery();
  const { data: inTrend, isLoading: isLoadingTrend } =
    useGetMovieInTrendQuery();
  const { data: TopRated, isLoading: isLoadingTopRated } =
    useGetTopRatedQuery();

  return (
    <section className="home-page" {...props}>
      <InputSearch />
      <MainSwiper
        items={
          isLoadingPopular
            ? []
            : shuffledArrayAndSelected<IMovie>([...mostPopular?.results!], 3)
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
    </section>
  );
};
