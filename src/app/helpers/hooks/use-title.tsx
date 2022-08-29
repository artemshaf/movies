import { useEffect } from "react";

export function useTitle(title: string, resetOnUnmount = true) {
  useEffect(() => {
    if (!resetOnUnmount) return;
    let initialTitle = document.title;

    return () => {
      document.title = initialTitle;
    };
  }, [resetOnUnmount]);

  useEffect(() => {
    document.title = title;
  }, [title]);
}
