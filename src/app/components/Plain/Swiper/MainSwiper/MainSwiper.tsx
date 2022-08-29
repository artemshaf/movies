import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { IMainSwiperInterface } from "./MainSwiper.interface";
import "swiper/css";
import "swiper/css/pagination";
import { GET__ORIGINAL_IMAGE } from "app/helpers";
import "./MainSwiper.scss";
import { Lazy, Navigation, Pagination, Thumbs } from "swiper";
import { Icon, Tag, Rating, Button } from "app/components";
import { useRef, useState } from "react";
import { useAppSelector } from "app/store";
import { useGetMovieGenresQuery } from "../../../../services";

export const MainSwiper = ({ items = [] }: IMainSwiperInterface) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>();
  const setNext = () => controlledSwiper?.slideNext();
  const setPrev = () => controlledSwiper?.slidePrev();
  const { data: genres } = useGetMovieGenresQuery();

  const swiperProps: SwiperProps = {
    direction: "horizontal",
    modules: [Thumbs, Navigation, Lazy, Pagination],
    lazy: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    freeMode: true,
    slidesPerView: 1,
    loopedSlides: 1,
    zoom: true,
    onBeforeInit(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    onSwiper: setControlledSwiper,
  };

  SwiperCore.use([Pagination, Navigation, Lazy]);

  return (
    <Swiper wrapperTag="ul" tag="section" {...swiperProps}>
      {items.map((item) => (
        <SwiperSlide
          tag="li"
          key={item.id}
          className="main-swiper__slide"
          style={{
            backgroundImage: `url("${GET__ORIGINAL_IMAGE(
              item.backdrop_path
            )}")`,
          }}
        >
          <div className="main-swiper__content">
            <div>
              <div className="main-swiper__content__tag__container">
                {item.genre_ids.slice(0, 4).map((genreId) => (
                  <Tag className="main-swiper__content__tag" key={genreId}>
                    {genres?.genres.find((item) => item.id === genreId)?.name}
                  </Tag>
                ))}
              </div>

              <Rating
                rating={item.vote_average}
                edit={false}
                className={"main-swiper__content__rating"}
              />
              <h1 className="main-swiper__content__title">{item.title}</h1>
              <h3 className="main-swiper__content__descr">{item.overview}</h3>
              <Button watch={`movie/${item.id}`}>
                Watch now <Icon icon="ChevronRight" />
              </Button>
            </div>
          </div>
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
  );
};
