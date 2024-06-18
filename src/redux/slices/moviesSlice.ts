import {IMoviesModel} from "../../models/IMoviesModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/movies.api.service";

interface IState {
    movies: IMoviesModel[] | undefined,
    error: boolean
}

const initialState: IState = {
    movies: [],
    error: false
}

const loadMovies = createAsyncThunk(
    'moviesSlice/loadMovies',
    async (_, thunkAPI) => {
        try {
            const movies = await moviesService.getAllMovies()
            console.log(movies)
            return thunkAPI.fulfillWithValue(movies)

        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovies.fulfilled, ((state, action) => {
            state.movies = action.payload?.results
        }))
        .addMatcher(isRejected(loadMovies), state => {
            state.error = true
        })
        .addMatcher(isFulfilled(loadMovies), state => {
            state.error = true
        })
})

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies
}