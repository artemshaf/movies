export * from "./hooks";

export const GET_IMAGE = (img: string, width: number = 500) =>
  `https://image.tmdb.org/t/p/w${width}/${img}`;

export const GET__ORIGINAL_IMAGE = (img: string) =>
  `https://image.tmdb.org/t/p/original/${img}`;

export function shuffledArrayAndSelected<T>(arr: T[], n: number): T[] {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

export const GET_REVIEWS_DATE = (date: number | Date) =>
  new Intl.DateTimeFormat("ru", {
    dateStyle: "long",
  })
    .format(new Date(date))
    .toString();
