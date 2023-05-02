import { useState, useEffect } from "react";

// pass in a minimum width as a string and that gives a boolean, which is then used to create conditions
// https://marthaerm.medium.com/how-the-usemediaquery-hook-works-de50245ea1ac
// https://fireship.io/snippets/use-media-query-hook/
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
