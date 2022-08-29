import { HomePage, MoviesPage } from "app/pages";
import DetailPage from "../pages/DetailPage/DetailPage";
import { HOME_ROUTE, MOVIES_ROUTE, MOVIE_ITEM_ID_ROUTE } from "./consts";

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const authRoutes: IRoute[] = [];

export const publicRoutes: IRoute[] = [
  {
    element: <HomePage />,
    path: HOME_ROUTE,
  },
  {
    element: <DetailPage />,
    path: MOVIE_ITEM_ID_ROUTE,
  },
  {
    element: <MoviesPage />,
    path: MOVIES_ROUTE,
  },
];
