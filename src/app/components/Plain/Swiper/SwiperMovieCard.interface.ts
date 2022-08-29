import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SwiperProps } from "swiper/react";
import { IMovie } from "app/interfaces";

export interface ISwiperMovieCardInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  items: IMovie[] | [];
  swiperProps?: SwiperProps;
}
