import {moviesSlice} from "./slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
