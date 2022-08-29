import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactComponent as Account } from "./svgs/Account.svg";
import { ReactComponent as Calendar } from "./svgs/Calendar.svg";
import { ReactComponent as ChevronDown } from "./svgs/Chevron-Down.svg";
import { ReactComponent as ChevronLeft } from "./svgs/Chevron-Left.svg";
import { ReactComponent as ChevronRight } from "./svgs/Chevron-Right.svg";
import { ReactComponent as ChevronUp } from "./svgs/Chevron-Up.svg";
import { ReactComponent as Clock } from "./svgs/Clock.svg";
import { ReactComponent as Close } from "./svgs/Close.svg";
import { ReactComponent as Expand } from "./svgs/Expand.svg";
import { ReactComponent as Gallery } from "./svgs/Gallery.svg";
import { ReactComponent as Home } from "./svgs/Home.svg";
import { ReactComponent as Menu } from "./svgs/Menu.svg";
import { ReactComponent as Minus } from "./svgs/Minus.svg";
import { ReactComponent as Movie } from "./svgs/Movie.svg";
import { ReactComponent as Pause } from "./svgs/Pause.svg";
import { ReactComponent as Play } from "./svgs/Play.svg";
import { ReactComponent as Search } from "./svgs/Search.svg";
import { ReactComponent as Settings } from "./svgs/Settings.svg";
import { ReactComponent as StarFill } from "./svgs/star-fill.svg";
import { ReactComponent as StarStroke } from "./svgs/star-stroke.svg";
import { ReactComponent as TV } from "./svgs/TV.svg";
import { ReactComponent as Loader } from "./svgs/Loader.svg";

export const icons = {
  Loader,
  Account,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Close,
  Expand,
  Gallery,
  Home,
  Menu,
  Minus,
  Movie,
  Pause,
  Play,
  Search,
  Settings,
  StarFill,
  StarStroke,
  TV,
};

export type IconNames = keyof typeof icons;

export interface IIconInterface
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  icon: IconNames;
  width?: string;
  height?: string;
}
