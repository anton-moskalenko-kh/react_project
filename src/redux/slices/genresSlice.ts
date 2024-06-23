import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {genresService} from "../../services/genre.api.service";
import {IGenreModel} from "../../models/IGenreModel";

interface IState {
    genres: IGenreModel[] | undefined,
    error: boolean,
}

const initialState: IState = {
    genres: [],
    error: false
}

const loadListOfGenres = createAsyncThunk(
    'genresSlice/loadListOfGenres',
    async (_, thunkAPI) => {
        try {
            const genres = await genresService.getListOfGenres()
            return thunkAPI.fulfillWithValue(genres)
        } catch (e) {
            const error = e as AxiosError
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadListOfGenres.fulfilled, (state, action) => {
            state.genres = action.payload?.genres
        })
        .addMatcher(isRejected(loadListOfGenres), state => {
            state.error = true
        })
        .addMatcher(isFulfilled(loadListOfGenres), state => {
            state.error = false
        })
})

export const genresActions = {
    ...genresSlice.actions,
    loadListOfGenres
}