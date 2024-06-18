import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesList/MoviesList";
import {useAppDispatch} from "../redux/store";
import {moviesActions} from "../redux/slices/moviesSlice";

const MoviesPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(moviesActions.loadMovies())
    }, [dispatch]);

    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;