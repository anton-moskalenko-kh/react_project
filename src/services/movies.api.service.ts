import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {accessToken} from "../constants/constants";
import {IMoviesPaginatedModel} from "../models/IMoviesPaginatedModel";
import {IMovieInfoModel} from "../models/IMovieInfoModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${accessToken}`
    return request
})

const moviesService = {
    getAllMovies: async (page: string): Promise<IMoviesPaginatedModel> => {
        const response = await axiosInstance.get<IMoviesPaginatedModel>(urls.movies.base,
            {params: {page: page}})
        return response.data
    },
    searchMovies: async (page: string, query: string): Promise<IMoviesPaginatedModel>  => {
        const response = await axiosInstance.get<IMoviesPaginatedModel>(urls.searchMovie.base,
            {params: {page: page, query: query}})
        return response.data
    },
    getMoviesByGenre: async (page: string, with_genres: string): Promise<IMoviesPaginatedModel> => {
        const response = await axiosInstance.get(urls.movies.base,
            {params: {page: page, with_genres: with_genres}})
        return response.data
    },
    getMovieById: async (id: string): Promise<IMovieInfoModel> => {
        const response = await axiosInstance.get<IMovieInfoModel>(urls.movieById.base + id)
        return response.data
    }
}

export {
    moviesService
}