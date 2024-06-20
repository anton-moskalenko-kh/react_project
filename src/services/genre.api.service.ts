import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {accessToken} from "../constants/constants";
import {IGenresListModel} from "../models/IGenresListModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${accessToken}`
    return request
})

const genresService = {
    getListOfGenres: async (): Promise<IGenresListModel> => {
        const response = await axiosInstance.get<IGenresListModel>(urls.genreList.base)
        return response.data
    }
}

export {
    genresService
}