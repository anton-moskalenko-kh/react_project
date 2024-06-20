import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesList/MoviesList";
import {useAppDispatch} from "../redux/store";
import {moviesActions} from "../redux/slices/moviesSlice";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagintation/Pagination";

const MoviesPage = () => {
    const [query] = useSearchParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const page = query.get('page') || '1'
        const with_genres = query.get('with_genres') || ''
        if (page && !with_genres) {
            dispatch(moviesActions.loadMovies(page))
        }

        if (page && with_genres) {
            dispatch(moviesActions.searchMoviesByGenre({page, with_genres}))
        }

    }, [dispatch, query]);

    // useEffect(() => {
    //     const search = query.get('query')
    //     dispatch(moviesActions.searchMovies(search || ''))
    // }, [dispatch, query]);


    return (
        <div>
            <MoviesList/>
            <Pagination/>
        </div>
    );
};

export default MoviesPage;