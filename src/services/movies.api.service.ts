import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {accessToken} from "../constants/constants";
import {IMoviesPaginatedModel} from "../models/IMoviesPaginatedModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${accessToken}`
    return request
})

const moviesService = {
    getAllMovies: async (): Promise<IMoviesPaginatedModel> => {
        const response = await axiosInstance.get<IMoviesPaginatedModel>(urls.movies.base)
        return response.data
    }
}

export {
    moviesService
}