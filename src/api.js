import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "93c8583b27f220b561ce13f269823d8b",
        language: "ko-KR"
    }
});

export const movieApi = {
    popular: () => api.get("movie/popular"),
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    detail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: word => api.get("search/movie", {
        params: {
            query: word
        }
    })
};

export const tvApi = {
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    detail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    external: id => api.get(`tv/${id}/external_ids`),
    search: word => api.get("search/tv", {
        params: {
            query: word
        }
    })
};
