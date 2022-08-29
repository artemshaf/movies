import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";
import { useLatest } from "./use-latest";

function makeDebouncedHook(debounceFn) {
  return function useDebounce(cb, ms) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}

export const useDebounce = makeDebouncedHook(debounce);

/*
const makeRequest = useDebounce(() => {
    console.log("make request with query: ", query);
  }, 300);
*/
