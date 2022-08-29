import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Lazy, Navigation, Pagination, Thumbs } from "swiper";
import { useMemo, useState } from "react";
import { ISwiperMovieCardInterface } from "./SwiperMovieCard.interface";
import { Icon, MovieCard } from "app/components";

export const SwiperMovieCard = ({
  swiperProps: transferSwiperProps,
  items,
  className,
  style,
}: ISwiperMovieCardInterface) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>();
  const setNext = () => controlledSwiper?.slideNext();
  const setPrev = () => controlledSwiper?.slidePrev();
  const swiperProps: SwiperProps = useMemo(
    () => ({
      direction: "horizontal",
      modules: [Thumbs, Navigation, Lazy],
      lazy: true,
      freeMode: true,
      slidesPerView: 1,
      breakpoints: {
        480: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 3.2,
        },
        1580: {
          slidesPerView: 4.2,
        },
        3200: {
          slidesPerView: 6.2,
        },
      },
      spaceBetween: 20,
      loopedSlides: 1,

      onBeforeInit(swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      },
      onSwiper: setControlledSwiper,
      ...transferSwiperProps,
    }),
    [setControlledSwiper, transferSwiperProps]
  );

  SwiperCore.use([Pagination, Navigation, Lazy]);

  return (
    <Swiper wrapperTag="ul" tag="section" {...swiperProps}>
      {items.map((item) => (
        <SwiperSlide tag="li" key={item.id} className="main-swiper__slide">
          <MovieCard movie={item} className={className} style={style} />
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
