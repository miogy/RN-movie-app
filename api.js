const API_KEY = "4da5fb29b597b1b0826408bd9c23ad11";
const BASE_URL = "https://api.themoviedb.org/3";

export const moviesApi = {
  trending: () =>
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  upcoming: () =>
    fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
    ).then((res) => res.json()),
  nowPlaying: () =>
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    // console.log(queryKey);
    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    ).then((res) => res.json());
  },
};

export const tvApi = {
  airing: () =>
    fetch(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=KR&page=1`
    ).then((res) => res.json()),
  trending: () =>
    fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  topRated: () =>
    fetch(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=KR&page=1&query=`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    // console.log(queryKey);
    fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    ).then((res) => res.json());
  },
};
