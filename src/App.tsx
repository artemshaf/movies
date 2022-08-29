import { AppRouter, withLayout } from "app/components";
import { useEffect } from "react";
import { useGetMovieGenresQuery } from "./app/services";
import { useAppDispatch } from "./app/store";

function App() {
  useGetMovieGenresQuery();

  return <AppRouter />;
}

export default withLayout(App);
