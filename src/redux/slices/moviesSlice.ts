import {IMoviesModel} from "../../models/IMoviesModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/movies.api.service";
import {IMovieInfoModel} from "../../models/IMovieInfoModel";

interface IState {
    movies: IMoviesModel[],
    error: boolean,
    total_pages: number,
    movie: IMovieInfoModel | null
}

const initialState: IState = {
    movies: [],
    error: false,
    total_pages: 0,
    movie: null
}

const loadMovies = createAsyncThunk(
    'moviesSlice/loadMovies',
    async (page: string, thunkAPI) => {
        try {
            const movies = await moviesService.getAllMovies(page)
            return thunkAPI.fulfillWithValue(movies)
        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const searchMovies = createAsyncThunk(
    'moviesSlice/searchMovies',
    async ({page, query} : {page: string, query: string}, thunkAPI) => {
        try {
            const movies = await moviesService.searchMovies(page, query)
            return thunkAPI.fulfillWithValue(movies)
        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const searchMoviesByGenre = createAsyncThunk('moviesSlice',
    async ({page, with_genres} : {page: string, with_genres: string}, thunkAPI) => {
        try {
            const movies = await moviesService.getMoviesByGenre(page, with_genres)
            return thunkAPI.fulfillWithValue(movies)
        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    })

const getMovieInfo = createAsyncThunk('moviesSlice/getMovieInfo',
    async (id: string, thunkAPI) => {
        try {
            const movie = await moviesService.getMovieById(id)
            return thunkAPI.fulfillWithValue(movie)
        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    })

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovies.fulfilled, ((state, action) => {
            if (action.payload) {
                state.movies = action.payload.results
                state.error = false
                state.total_pages = action.payload.total_pages
            }
        }))
        .addCase(searchMovies.fulfilled, (state, action) => {
            if (action.payload) {
                state.movies = action.payload.results
                state.error = false
                state.total_pages = action.payload.total_pages
            }
        })
        .addCase(searchMoviesByGenre.fulfilled, (state, action) => {
            if (action.payload) {
                state.movies = action.payload.results
                state.error = false
                state.total_pages = action.payload.total_pages
            }
        })
        .addCase(getMovieInfo.fulfilled, (state, action) => {
            if (action.payload) {
                state.movie = action.payload
                state.error = false
            }
        })
        .addMatcher(isRejected(loadMovies, searchMovies, searchMoviesByGenre, getMovieInfo ), state => {
            state.error = true
        })
        .addMatcher(isFulfilled(loadMovies, searchMovies, searchMoviesByGenre, getMovieInfo), state => {
            state.error = false
        })
})

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies,
    searchMovies,
    searchMoviesByGenre,
    getMovieInfo
}