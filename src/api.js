import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "93c8583b27f220b561ce13f269823d8b",
        language: "ko-KR"
    }
});

api.get("movie/popular");

export default api;