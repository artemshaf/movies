import { Icon, CustomLink } from "app/components";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  selectSearchText,
  setText,
  useAppDispatch,
  useAppSelector,
} from "app/store";
import "./InputSearch.scss";
import { useLazySearchMovieByParamsQuery } from "app/services";
import { useDebounce } from "app/helpers";

export const InputSearch = () => {
  const [trigger, result] = useLazySearchMovieByParamsQuery();

  const [inputOpen, setInputOpen] = useState(false);
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectSearchText);

  const makeRequestDebounce = useDebounce(async () => {
    await trigger({ query: searchText });
  }, 600);

  const handleKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      await trigger({ query: searchText });
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setText(value));
    makeRequestDebounce(value);
  };

  return (
    <div
      className={classNames("input-search__container", {
        "input-search__container_open": inputOpen,
      })}
    >
      <div className="input-search__block">
        <input
          className={classNames("input-search", {
            "input-search_open": inputOpen,
          })}
          value={searchText}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKey(e)}
        ></input>
        {inputOpen ? (
          <Icon icon="Close" onClick={() => setInputOpen(!inputOpen)} />
        ) : (
          <Icon icon="Search" onClick={() => setInputOpen(!inputOpen)} />
        )}
      </div>
      {result.isSuccess &&
      result.data &&
      searchText &&
      result.data?.results.length > 0 ? (
        <ul
          className={classNames("input-search__list", {
            "input-search__list_open": inputOpen,
          })}
        >
          {result.data?.results.slice(0, 5).map((item) => (
            <li key={item.id}>
              <CustomLink to={"/movie/" + item.id}>
                {item.title ? item.title : item.original_title}
              </CustomLink>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
