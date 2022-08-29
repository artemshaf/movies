import { useParams } from "react-router-dom";
import {
  GET_IMAGE,
  GET_REVIEWS_DATE,
  GET__ORIGINAL_IMAGE,
  shuffledArrayAndSelected,
} from "app/helpers";
import { Poster } from "app/interfaces";
import {
  useGetMovieByIdQuery,
  useGetMovieImagesByIdQuery,
  useGetMovieRecommendationByIdQuery,
  useGetMovieReviewsByIdQuery,
  useGetMovieVideoByIdQuery,
} from "app/services";
import { IDetailPageInterface } from "./DetailPage.interface";
import "./DetailPage.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useMemo, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Lazy, Navigation } from "swiper";
import { Icon, Loader, Rating, SwiperMovieCard, Tag } from "app/components";

const DetailPage = ({ className, ...props }: IDetailPageInterface) => {
  const id = useParams().id as string;
  const { data: movie, isLoading: isLoadingMovie } = useGetMovieByIdQuery(id);
  const { data: ImagesData, isLoading: isLoadingMovieImages } =
    useGetMovieImagesByIdQuery(id);
  const { data: VideoData, isLoading: isLoadingMovieVideo } =
    useGetMovieVideoByIdQuery(id);
  const { data: RecommendationData, isLoading: isLoadingRecommendation } =
    useGetMovieRecommendationByIdQuery(id);
  const { data: ReviewsData, isLoading: isLoadingReviews } =
    useGetMovieReviewsByIdQuery({ id, page: 1 });

  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>();
  const setNext = () => controlledSwiper?.slideNext();
  const setPrev = () => controlledSwiper?.slidePrev();
  const swiperProps: SwiperProps = useMemo(
    () => ({
      direction: "horizontal",
      modules: [Navigation, Lazy],
      lazy: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      freeMode: true,
      slidesPerView: 1,
      loopedSlides: 1,
      onBeforeInit(swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      },
      onSwiper: setControlledSwiper,
    }),
    [setControlledSwiper]
  );
  SwiperCore.use([Navigation, Lazy, Autoplay]);

  const isLoaded =
    isLoadingMovie || movie === undefined || ImagesData === undefined
      ? true
      : false;

  return (
    <>
      {isLoaded ||
      movie === undefined ||
      ImagesData === undefined ||
      VideoData === undefined ? (
        <Loader />
      ) : (
        <section className="detail-page" {...props}>
          <div
            className="detail-page__promo"
            style={{
              backgroundImage: `url("${GET__ORIGINAL_IMAGE(
                movie?.backdrop_path ? movie?.backdrop_path : movie.poster_path
              )}")`,
            }}
          >
            <button className="detail-page__promo__play">
              <Icon icon="Play" />
            </button>
            <div className="detail-page__promo__descr">
              <h1>{movie.title}</h1>
              <h1>{movie.overview}</h1>
              <Rating rating={Math.round(movie.vote_average)} />
            </div>
          </div>
          <div className="detail-page__grid">
            <div className="detail-page__grid__videos">
              <Swiper
                tag="div"
                wrapperTag="ul"
                {...swiperProps}
                className="detail-page__grid__videos__slider"
              >
                {shuffledArrayAndSelected<Poster>([...ImagesData?.backdrops], 2)
                  .concat(shuffledArrayAndSelected([...ImagesData?.posters], 2))
                  .map((item, index) => (
                    <SwiperSlide
                      tag="li"
                      key={item.file_path + index}
                      className="detail-page__grid__videos__slide"
                    >
                      <img
                        src={GET_IMAGE(item?.file_path)}
                        alt={movie.title}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                <button
                  className={"main-swiper__navigation_right"}
                  onClick={() => setNext()}
                >
                  <Icon icon="ChevronRight" />
                </button>
                <button
                  className={"main-swiper__navigation_left"}
                  onClick={() => setPrev()}
                >
                  <Icon icon="ChevronLeft" />
                </button>
              </Swiper>
            </div>
            <div className="detail-page__grid__descr">
              <div className="detail-page__grid__descr__title_block">
                <h1>{movie.title}</h1>
                <Tag>{movie.status}</Tag>
              </div>
              {/* <h2>{movie.}</h2> */}
              <h2>{movie.overview}</h2>
              <ul className="detail-page__grid__descr__list">
                <li>
                  <span>Жанры:</span>
                  <span>
                    {movie.genres.reduce<JSX.Element>(
                      (acc, item, index, array) => {
                        if (index === array.length - 1) {
                          return (
                            <>
                              {acc} {item.name}
                            </>
                          );
                        }
                        return (
                          <>
                            {acc} {item.name},
                          </>
                        );
                      },
                      <></>
                    )}
                  </span>
                </li>
                <li>
                  <span>Языки:</span>
                  <span>
                    {movie.spoken_languages.reduce<JSX.Element>(
                      (acc, item, index, array) => {
                        if (index === array.length - 1) {
                          return (
                            <>
                              {acc} {item.name}
                            </>
                          );
                        }
                        return (
                          <>
                            {acc} {item.name},
                          </>
                        );
                      },
                      <></>
                    )}
                  </span>
                </li>
                <li>
                  <span>Страны:</span>
                  <span>
                    {movie.production_countries.reduce<JSX.Element>(
                      (acc, item, index, array) => {
                        if (index === array.length - 1) {
                          return (
                            <>
                              {acc} {item.name}
                            </>
                          );
                        }
                        return (
                          <>
                            {acc} {item.name},
                          </>
                        );
                      },
                      <></>
                    )}
                  </span>
                </li>
                <li>
                  <span>Оценило:</span>
                  <span> {movie.vote_count}</span>
                </li>
                <li>
                  <span>Дата выпуска:</span>
                  <span> {movie.release_date.toString()}</span>
                </li>
                <li>
                  <span>Продолжительность:</span>
                  <span> {movie.runtime} мин.</span>
                </li>
              </ul>
            </div>
            <div className="detail-page__grid__peoples">
              <h2 className="detail-page__grid__peoples__title">Отзывы</h2>
              <ul className="detail-page__grid__peoples__reviews">
                {ReviewsData?.results && ReviewsData?.results.length > 0 ? (
                  ReviewsData?.results.slice(0, 3).map((item) => (
                    <li
                      key={item.id}
                      className="detail-page__grid__peoples__reviews-item"
                    >
                      <div>
                        <h3>{item.author}</h3>
                        <span className="date-tag">
                          {GET_REVIEWS_DATE(item.created_at)}
                        </span>
                      </div>
                      <Rating rating={item.author_details.rating} />
                      <p className="content">{item.content}</p>
                    </li>
                  ))
                ) : (
                  <li
                    key={"zero reviews"}
                    className="detail-page__grid__peoples__reviews-item"
                  >
                    <p className="content">Отзывов нет...</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {isLoadingRecommendation ? (
            <></>
          ) : (
            <div className="p-5">
              <h1 className="my-5">Часто вместе с этим смотрят:</h1>
              <SwiperMovieCard
                swiperProps={{
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                }}
                className="p-5"
                items={RecommendationData?.results!}
                style={{ height: "400px", width: "500px" }}
              />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default DetailPage;
