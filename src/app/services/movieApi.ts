import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IGenresResponse,
  IMovieDetail,
  IMovieImages,
  IMovieResponse,
  IMovieReviwsResponse,
  IMovieVideoResponse,
} from "app/interfaces/movie.interface";
import { api_key, api_v4_token, movieApiBaseUrl } from "./consts";

export const movieApi = createApi({
  reducerPath: "@@MOVIE_API_PATH",
  baseQuery: fetchBaseQuery({
    baseUrl: movieApiBaseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", `Bearer ${api_v4_token}`);
      return headers;
    },
    paramsSerializer: (params) => {
      const par = new URLSearchParams();
      par.set("api_key", api_key || "");
      return par.toString();
    },
  }),

  endpoints: (build) => ({
    getMovieById: build.query<IMovieDetail, string>({
      query: (id) => ({
        method: "GET",
        url: "/movie/" + id,
        params: {
          language: "ru",
        },
      }),
    }),
    getMovieImagesById: build.query<IMovieImages, string>({
      query: (id) => ({
        method: "GET",
        url: `/movie/${id}/images`,
        params: {},
      }),
    }),
    getMovieVideoById: build.query<IMovieVideoResponse, string>({
      query: (id) => ({
        method: "GET",
        url: `/movie/${id}/videos`,
        params: {
          language: "ru",
        },
      }),
    }),
    searchMovieByParams: build.query<IMovieResponse, Record<string, any>>({
      query: (query) => ({
        method: "GET",
        url: `/search/movie`,
        params: {
          language: "ru",
          ...query,
        },
      }),
    }),
    getMovieReviewsById: build.query<
      IMovieReviwsResponse,
      { id: string; page?: number }
    >({
      query: ({ id, page = 1 }) => ({
        method: "GET",
        url: `/movie/${id}/reviews`,
        params: {
          page,
        },
      }),
    }),
    getMovieRecommendationById: build.query<IMovieResponse, string>({
      query: (id) => ({
        method: "GET",
        url: `/movie/${id}/recommendations`,
        params: {
          language: "ru",
        },
      }),
    }),
    getTheMostPopular: build.query<IMovieResponse, void>({
      query: () => ({
        method: "GET",
        url: "/movie/popular",
        params: {
          language: "ru",
        },
      }),
    }),
    getTopRated: build.query<IMovieResponse, string | void>({
      query: (page = "1") => ({
        method: "GET",
        url: "/movie/top_rated",
        params: {
          language: "ru",
          page,
        },
      }),
    }),
    getMovieInTrend: build.query<IMovieResponse, Record<string, any> | void>({
      query: (params = {}) => ({
        method: "GET",
        url: "/trending/movie/day",
        params: {
          language: "ru",
          ...params,
        },
      }),
    }),
    getMovieGenres: build.query<IGenresResponse, void>({
      query: () => ({
        method: "GET",
        url: "/genre/movie/list?",
        params: {
          language: "ru",
        },
      }),
    }),
  }),
});

export const {
  useGetMovieGenresQuery,
  useLazyGetMovieInTrendQuery,
  useLazySearchMovieByParamsQuery,
  useGetMovieReviewsByIdQuery,
  useGetMovieRecommendationByIdQuery,
  useGetMovieVideoByIdQuery,
  useGetMovieImagesByIdQuery,
  useGetMovieByIdQuery,
  useGetTheMostPopularQuery,
  useGetTopRatedQuery,
  useGetMovieInTrendQuery,
} = movieApi;
