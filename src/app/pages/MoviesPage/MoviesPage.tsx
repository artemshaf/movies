import { Loader, MovieCardList, NotSearch, UISelect } from "app/components";
import { FC, useEffect, useMemo, useState } from "react";
import {
  useLazyGetMovieInTrendQuery,
  useLazySearchMovieByParamsQuery,
} from "app/services";
import "./MoviesPage.scss";
import { useDebounce } from "app/helpers";
import ReactPaginate from "react-paginate";
import { ISelectOption } from "app/components/UI/Select/Select.interface";
import { IMovieResponse } from "app/interfaces";

export const MoviesPage: FC = (): JSX.Element => {
  const [trigger, result] = useLazySearchMovieByParamsQuery();
  const [triggerTrend, resultTrend] = useLazyGetMovieInTrendQuery();
  const [visibleMovies, setVisibleMovies] = useState<IMovieResponse>();
  const [pages, setPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputYear, setInputYear] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAdult, setInputAdult] = useState(false);

  const prepareYearOptions = useMemo((): ISelectOption[] => {
    const solve: ISelectOption[] = [];
    solve.push({
      label: "Все года",
      value: "",
    });
    const nowYear = new Date().getFullYear();
    for (let index = nowYear; index + 70 > nowYear; index--) {
      solve.push({
        label: index + "",
        value: index + "",
      });
    }
    return solve;
  }, []);

  const req = async () => {
    if (!inputName) {
      await triggerTrend({
        page: currentPage,
      });
      setPages(resultTrend.data?.total_pages!);
      setVisibleMovies(resultTrend?.data!);
      return;
    }
    await trigger(
      {
        query: inputName,
        include_adult: inputAdult,
        year: +inputYear,
        page: currentPage,
      },
      false
    );
  };

  const makeRequestDebounce = useDebounce(async () => {
    req();
  }, 700);

  useEffect(() => {
    req();
  }, []);

  useEffect(() => {
    setPages(result.data?.total_pages!);
    setVisibleMovies(result.data);
  }, [result, result.data?.total_pages]);

  useEffect(() => {
    setPages(resultTrend.data?.total_pages!);
    setVisibleMovies(resultTrend.data);
  }, [resultTrend]);

  useEffect(() => {
    makeRequestDebounce();
  }, [inputName]);

  useEffect(() => {
    req();
  }, [currentPage, inputAdult, inputYear]);

  return (
    <section className="movies-page">
      <section className="movies-page__filters">
        <UISelect
          options={prepareYearOptions}
          setValue={setInputYear}
          value={inputYear}
          className="movies-page__filters__select"
        />
        <div className="movies-page__filters__adult">
          <input
            type={"checkbox"}
            checked={inputAdult}
            onChange={() => setInputAdult(!inputAdult)}
          />
          <p>18+</p>
        </div>
        <input
          placeholder="Найти..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </section>
      <section className="movies-page__movies">
        {visibleMovies?.results.length === 0 ? (
          <NotSearch />
        ) : result.isLoading ? (
          <Loader />
        ) : (
          <MovieCardList movies={visibleMovies ? visibleMovies?.results : []} />
        )}
        {pages ? (
          <ReactPaginate
            activeClassName="movies-page__movies__pages_active"
            pageCount={pages}
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            className="movies-page__movies__pages"
          />
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};
