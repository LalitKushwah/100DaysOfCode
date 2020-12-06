
import axios from "axios";

export class MovieService {

    static axiosApiInstance = MovieService.axiosApiInstance ||  axios.create();

    constructor() {
        MovieService.axiosApiInstance.interceptors.request.use(
            config => {
                config.headers['Authorization'] = 'Bearer 04c35731a5ee918f014970082a0088b1';
                config.headers['Content-Type'] = 'application/json;charset=utf-8';
                return config;
            },
            error => {
                Promise.reject(error);
            });
    }
    

    getMoviesList () {
        return MovieService.axiosApiInstance.get(process.env.REACT_APP_MOVIE_LIST);        
    };    

    async getMoviesWithSearchKeyword (searchKeyword) {
        const searchUrl = `${process.env.REACT_APP_SEARCH_API}&query=${searchKeyword}`;
        return MovieService.axiosApiInstance.get(searchUrl);
    }

}