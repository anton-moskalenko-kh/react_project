import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesList/MoviesList";
import {useAppDispatch} from "../redux/store";
import {moviesActions} from "../redux/slices/moviesSlice";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagintation/Pagination";

const MoviesPage = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const page = searchParams.get('page') || '1'
        const with_genres = searchParams.get('with_genres') || ''
        const query = searchParams.get('query') || ''
        if (page && !with_genres && !query) {
            dispatch(moviesActions.loadMovies(page))
        }

        if (page && with_genres) {
            dispatch(moviesActions.searchMoviesByGenre({page, with_genres}))
        }

        if (page && query) {
            dispatch(moviesActions.searchMovies({page, query}))
        }
    }, [dispatch, searchParams]);

    return (
        <div>
            <MoviesList/>
            <Pagination/>
        </div>
    );
};

export default MoviesPage;